import {
  Arg,
  Mutation,
  PubSub,
  PubSubEngine,
  Query,
  Resolver,
  Subscription,
} from "type-graphql";
import { pubsub } from "../index";
import Chat from "../schema/chat";

const chats: Chat[] = [];
const CHAT_CHANNEL = "CHAT_CHANNEL";

chats.push({
  id: 0,
  message: "Hello",
  from: "Ryan",
});

chats.push({
  id: 1,
  message: "Whats up",
  from: "Ryan2",
});

@Resolver((of) => Chat)
export default class ChatResolver {
  @Query((returns) => [Chat])
  chats() {
    return chats;
  }

  @Mutation((of) => Chat)
  sendMessage(
    @Arg("from") from: string,
    @Arg("message") message: string,
    @PubSub() pubsub: PubSubEngine
  ) {
    const chat: Chat = { id: chats.length, from, message };
    chats.push(chat);
    pubsub.publish(CHAT_CHANNEL, { messageSent: chat });
    return chat;
  }

  @Subscription((of) => Chat, {
    topics: CHAT_CHANNEL,
  })
  messageSent() {
    return {
      subscirbe: (root: any, args: any, { ps }: any) => {
        return pubsub.asyncIterator(CHAT_CHANNEL);
      },
    };
  }
}
