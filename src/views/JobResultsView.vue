<template>
  <div class="flex w-full flex-row flex-nowrap">
    <JobFiltersSidebar />
    <JobListings />
  </div>
</template>

<script>
import JobFiltersSidebar from '../components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue'
import JobListings from '../components/JobResults/JobListings.vue'
export default {
  name: 'JobResultsView',
  components: { JobFiltersSidebar, JobListings },
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
