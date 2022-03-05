<template>
    <div v-for="link in links" :key="link.name">
       <router-link :to="link.link">{{link.name}}</router-link>
    </div>
</template>

<script setup>
const links = [
  { name: 'Home', link: '/'},
  { name: 'Processes', link: '/processes' },
]
</script>
