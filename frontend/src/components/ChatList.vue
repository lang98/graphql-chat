<template>
  <div class="chat-list">
    <h2>This is your chats</h2>
    <b-list-group v-for="(chat, id) in chats" :key="id">
      <b-list-group-item>{{ chat.from }}</b-list-group-item>
      <b-list-group-item>{{ chat.message }}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script lang="ts">
import { Component, Model, Vue } from "vue-property-decorator";
import gql from "graphql-tag";
import ChatModel from "../model/chat";
import { QUERY_CHATS } from "../graphql/chat.graphql";

@Component({
  apollo: {
    chats() {
      return {
        query: QUERY_CHATS,
        result(result: any) {
          console.log(result);
        },
      };
    },
  },
})
export default class ChatList extends Vue {
  chats: ChatModel[] = [];
}
</script>
