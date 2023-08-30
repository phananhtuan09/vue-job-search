<template>
  <h1 class="text-6xl font-bold">Job Results page</h1>
  <button @click="handleNavigateHome">Go to Home Page</button>
</template>

<script>
export default {
  name: 'JobResultsView',

  methods: {
    handleNavigateHome() {
      this.$router.push({
        name: 'Home'
      })
    }
  }
}
</script>

<style></style>
