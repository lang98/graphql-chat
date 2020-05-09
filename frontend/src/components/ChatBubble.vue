<template>
  <div class="message-row" v-bind:style="messageRowStyle">
    <div class="message-cell" v-bind:style="messageCellStyle">
      <span class="message-text" v-bind:style="messageTextStyle">{{message}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Model, Vue, Prop } from "vue-property-decorator";

@Component
export default class ChatBubble extends Vue {
  @Prop({ type: String, required: true }) message: string;
  @Prop({ type: Boolean, required: true }) isSelf: boolean;

  get messageRowStyle() {
    return this.isSelf
      ? { "justify-content": "flex-end" }
      : { "justify-content": "flex-start" };
  }

  get messageCellStyle() {
    return this.isSelf
      ? { "background-color": "rgb(0, 102, 255)" }
      : { "background-color": "rgb(230, 230, 230)" };
  }

  get messageTextStyle() {
    return this.isSelf ? { color: "white" } : { color: "black" };
  }
}
</script>

<style scoped>
.message-row {
  display: flex;
  flex-direction: row;
}
.message-cell {
  border-radius: 100px;
  display: inline;
  padding: 8px;
  margin: 8px;
  max-width: 100px;
}
.message-text {
  font-size: 0.4cm;
}
</style>