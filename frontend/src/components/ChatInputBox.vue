<template>
  <div class="chat-input-box">
    <b-input-group>
      <b-form-input v-model="message" placeholder="What do you wanna say..." />
      <b-input-group-append>
        <b-button variant="outline-secondary" @click="sendMessage">SEND</b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import gql from "graphql-tag";
import ChatModel from "../model/chat";
import { SEND_MESSAGE_MUTATION } from "../graphql/chat.graphql";

@Component
export default class ChatList extends Vue {
  message = "";

  async sendMessage() {
    if (this.message) {
      await this.$apollo.mutate({
        mutation: SEND_MESSAGE_MUTATION,
        variables: {
          from: "ME",
          message: this.message
        }
      });
    }
    this.message = "";
  }
}
</script>

<style scoped>
.chat-input-box {
  margin-top: auto;
}
</style>
