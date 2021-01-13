<template>
  <div class="container column">
    <app-form @add-block="addBlock"></app-form>
    <app-resume :content="content"></app-resume>
  </div>
  <div class="container">
    <p>
      <button v-if="!comments.length" class="btn primary" @click="loadComments(102)">Load comments</button>
    </p>
    <app-comments :comments="comments" :loading="loading"></app-comments>
  </div>
</template>

<script>
import AppResume from "@/components/AppResume";
import AppForm from "@/components/AppForm";
import axios from "axios";
import AppComments from "@/components/AppComments";

export default {
  data() {
    return {
      content: [
        // {id: Math.random(), type: 'title', props: {text: 'AppTitle: Резюме Nickname'}}
      ],
      comments: [],
      loading: false
    }
  },
  methods: {
    addBlock(block) {
      block.id = Math.random() * 1000
      this.content.push(block)
    },
    async loadComments(limit) {
      this.loading = true
      const {data} = await axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}`)
      this.comments = data
      this.loading = false
    },
  },
  components: {AppForm, AppResume, AppComments}
}
</script>

<style>
.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  width: 150px;
  height: auto;
  border-radius: 50%;
}
</style>
