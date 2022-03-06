<template>
  <div v-if="processes">
    <h1 v-for="process in processes" :key="process.id">
      <router-link :to="{ name: 'Process', params: { id: process.id } }">{{ process.attributes.title }}</router-link>
    </h1>
  </div>
  <h1 v-else-if="error">{{ error }}</h1>
  <h1 v-else class="text-slate-500">Loading...</h1>
</template>

<script>
import axios from "axios";

export default {
  async mounted() {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/processes?fields=title"
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
    };
  },
};
</script>
