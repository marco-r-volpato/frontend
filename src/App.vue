<template>
  <NavBar />
  <hr />
  <ais-instant-search :search-client="searchClient" index-name="wiki">
    <ais-search-box />
    <br />
    <ais-hits>
      <template v-slot:item="{ item }">
        <h2>
          <ais-highlight attribute="attributes.title" :hit="item" />
        </h2>
        <p>{{ item.attributes.description }}</p>
        <br />
        <ul>
          <li v-for="step in item.attributes.steps" :key="step.id">
            {{ step.title }}
          </li>
        </ul>
        <br />
      </template>
    </ais-hits>
  </ais-instant-search>
  <hr />
  <router-view />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import algoliasearch from "algoliasearch/lite";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      searchClient: algoliasearch(
        "BPJKVWB7I3",
        "2ebcf222af0345728762fde4f8e0c450"
      ),
    };
  },
};
</script>
