<template>
  <input v-model="query" type="text">
  <p>Searching for: {{query}}</p>
  <div v-if="processes">
    <h1 v-for="process in processes" :key="process.id">
      <router-link :to="{ name: 'Process', params: { id: process.id } }">
        <h1>{{ process.attributes.title }}</h1>
        <p>{{ process.attributes.description }}</p>
        <br>
      </router-link>
    </h1>
  </div>
  <h1 v-else-if="error">{{ error }}</h1>
  <h1 v-else class="hidden">Loading...</h1>
</template>

<script>
import axios from "axios";
import {ref} from 'vue';

const query = ref(null)

export default {
  async mounted() {
    try {
      const response = await axios.get(
        'http://localhost:1337/api/processes?populate=*'
      );
      this.processes = response.data.data;
      console.log(this.processes);
    } catch (error) {
      this.error = error;
    }
  },
  data() {
    return {
      processes: [],
      error: null,
      query
    };
  },
};
</script>