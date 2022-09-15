<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: 'The Hero',
  },
  message: {
    type: String,
    default: 'This is the hero message',
  },
  image: {
    type: String,
    default: 'https://picsum.photos/200/300',
  },
});
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <img :src="image" alt="" />
  </div>
</template>
