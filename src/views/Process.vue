<template>
  <h1 v-if="process.id">Process: {{ process.attributes.title }}</h1>
  <h1 v-else-if="error">{{ error }}</h1>
  <h1 v-else class="text-slate-500">Loading...</h1>
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
