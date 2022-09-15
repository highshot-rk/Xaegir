<template>
  <div>
    <p>hello articles</p>
    <div v-for="article in articles.data" :key="article.id">
      <p>{{ article.attributes.name }}</p>
      <p>{{ article.attributes.description }}</p>
    </div>
  </div>
</template>

<script setup>
const { data: articles } = await useFetch('http://localhost:1337/api/articles');
</script>
