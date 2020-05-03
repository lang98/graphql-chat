import {
  Arg,
  Mutation,
  PubSub,
  PubSubEngine,
  Query,
  Resolver,
  Subscription,
} from "type-graphql";
import Chat from "../schema/chat";

const chats: Chat[] = [];
const CHAT_CHANNEL = "CHAT_CHANNEL";

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
  }

  @Subscription((of) => Chat, {
    topics: CHAT_CHANNEL,
  })
  messageSent(@PubSub() pubsub: PubSubEngine) {
    return pubsub.asyncIterator(CHAT_CHANNEL);
  }
}
