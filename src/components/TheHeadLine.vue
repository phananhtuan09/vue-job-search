<template>
  <section>
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ actionTitle }}</span
      ><br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Google Corp.</h2>
  </section>
</template>

<script>
export default {
  name: 'TheHeadLine',
  data() {
    return {
      actionTitleArray: ['Build', 'Create', 'Design', 'Code'],
      actionTitle: 'Build',
      intervalActionID: null
    }
  },
  computed: {
    actionClasses() {
      return {
        [this.actionTitle.toLocaleLowerCase()]: true
      }
    }
  },
  created() {
    this.changeTitle()
  },
  beforeUnmount() {
    if (this.intervalActionID) clearInterval(this.intervalActionID)
  },

  methods: {
    changeTitle() {
      this.intervalActionID = setInterval(() => {
        const currentIndex = this.actionTitleArray.indexOf(this.actionTitle)
        let nextTitle = ''
        if (currentIndex === this.actionTitleArray.length - 1) {
          nextTitle = this.actionTitleArray[0]
        } else {
          nextTitle = this.actionTitleArray[currentIndex + 1]
        }
        this.actionTitle = nextTitle
      }, 1000)
    }
  }
}
</script>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
