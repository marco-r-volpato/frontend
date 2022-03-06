<template>
  <div v-if="process.id">
    <h1>{{ process.attributes.title }}</h1>
    <p>{{ process.attributes.context }}</p>
  </div>
  <h1 v-else-if="error">{{ error }}</h1>
  <h1 v-else class="hidden">Loading...</h1>
</template>

<script>
import axios from "axios";

export default {
  async mounted() {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/processes/" +
          this.$route.params.id +
          "?fields=title,context"
      );
      this.process = response.data.data;
      console.log(this.process);
    } catch (error) {
      this.error = error;
    }
  },
  data() {
    return {
      process: {},
      error: null,
    };
  },
};
</script>
