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
  display: flex;
  justify-content: center;
}
.chat-view-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 90vh;
  /* width: 500px; */
}
</style>