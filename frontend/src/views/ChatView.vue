<template>
  <div>
    <h2>MyChat</h2>
    <ChatList />
    <ChatInputBox />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import ChatList from "../components/ChatList.vue";
import ChatInputBox from "../components/ChatInputBox.vue";

@Component({
  components: {
    ChatList,
    ChatInputBox,
  },
})
export default class ChatView extends Vue {}
</script>
