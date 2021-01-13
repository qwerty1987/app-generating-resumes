<template>
    <div v-if="comments.length" class="card">
      <h2>Комментарии</h2>
      <ul class="list">
        <li class="list-item"
            :key="comment.id"
            v-for="comment in comments">
          <div>
            <p><strong>{{comment.email}}</strong></p>
            <small>{{comment.body}}</small>
          </div>
        </li>
      </ul>
    </div>
    <div class="loader" v-if="loading"></div>
</template>

<script>

export default {
  name: "AppComments",
  props: ['comments','loading']
}

</script>

<style scoped>

</style>
