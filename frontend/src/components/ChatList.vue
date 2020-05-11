<template>
  <div class="chat-list">
    <h2>This is your chats</h2>
    <b-list-group v-for="(chat, id) in chats" :key="id">
      <ChatBubble :message="chat.message" :isSelf="chat.from == 'ME'" />
    </b-list-group>
  </div>
</template>

<script lang="ts">
import { Component, Model, Vue } from "vue-property-decorator";
import gql from "graphql-tag";
import ChatModel from "../model/chat";
import ChatBubble from "./ChatBubble.vue";
import {
  QUERY_CHATS,
  MESSAGE_SENT_SUBSCRIPTION
} from "../graphql/chat.graphql";

@Component({
  apollo: {
    chats: {
      query: QUERY_CHATS,
      subscribeToMore: {
        document: MESSAGE_SENT_SUBSCRIPTION,
        updateQuery: (previousResult, { subscriptionData }) => {
          return {
            chats: [...previousResult.chats, subscriptionData.data.messageSent]
          };
        }
      }
    }
  },
  components: {
    ChatBubble
  }
})
export default class ChatList extends Vue {
  chats: ChatModel[] = [];
}
</script>

<style scoped>
.chat-list {
  margin-bottom: auto;
}
</style>
