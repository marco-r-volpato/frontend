<template>
  <div v-if="process.id">
    <h1>{{ process.attributes.title }}</h1>
    <p>{{ process.attributes.description }}</p>
    <br />
    <ul>
      <li v-for="step in process.attributes.steps" :key="step.id">
        <h2>{{ step.title }}</h2>
        <p>{{ step.description }}</p>
        <div v-if="step.images.data">
          <div v-for="image in step.images.data" :key="image.id">
             <img :src="('http://localhost:1337' + image.attributes.url)" alt="">
          </div>
        </div>
        <br />
      </li>
    </ul>
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
        'http://localhost:1337/api/processes/' +
          this.$route.params.id +
          '?populate=steps.images'
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