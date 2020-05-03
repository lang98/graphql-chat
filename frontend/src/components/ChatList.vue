<template>
  <div class="chat-list">
    <h>This is your chats</h>
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

@Component({
  apollo: {
    chats() {
      return {
        query: gql`
          query {
            chats {
              id
              message
              from
            }
          }
        `,
        result(result: any) {
          console.log(result);
        }
      };
    }
  }
})
export default class ChatList extends Vue {
  chats: ChatModel[] = [];
}
</script>
