<template>
    <div v-for="process in processes" :key="process.id">
       <router-link :to="{ name: 'Process', params: { id: process.id }}">{{process.name}}</router-link>
    </div>
</template>

<script setup>
const processes = [
  { name: 'Process 1', id: '1'},
  { name: 'Process 2', id: '2' },
]
</script>
