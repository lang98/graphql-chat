const chats = [];
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

const resolvers = {
  Query: {
    chats(root, args, context) {
      return chats;
    },
  },

  Mutation: {
    sendMessage(root, { from, message }, { pubsub }) {
      const chat = { id: chats.length, from, message };

      chats.push(chat);
      pubsub.publish("CHAT_CHANNEL", { messageSent: chat });

      return chat;
    },
  },

  Subscription: {
    messageSent: {
      subscribe: (root, args, { pubsub }) => {
        return pubsub.asyncIterator(CHAT_CHANNEL);
      },
    },
  },
};

module.exports = resolvers;
