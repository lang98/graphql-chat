<template>
  <div class="container">
    <div class="chat-view-container">
      <h2>VueChat</h2>
      <ChatList />
      <ChatInputBox />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import ChatList from "../components/ChatList.vue";
import ChatInputBox from "../components/ChatInputBox.vue";

@Component({
  components: {
    ChatList,
    ChatInputBox
  }
})
export default class ChatView extends Vue {}
</script>

<style scoped>
.container {
  align-content: center;
}
.chat-view-container {
  max-width: 500px;
}
</style>