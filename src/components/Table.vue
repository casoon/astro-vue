<template>

</template>

<script setup lang="ts">
  import {ref} from "vue";


  const columns = ref([{ prop: "name" }, { prop: "details" }]);
  const rows = ref([
    { name: "Joe", details: "Stuff 1", },
    { name: "Jane", details: "Stuff 2", },
    { name: "John", details: "Stuff 3", }
  ]);
</script>
