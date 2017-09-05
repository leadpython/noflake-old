<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <q-btn @click="goBackToHome" class="noflakeBTN" icon="search" big flat>GO BACK</q-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    goBackToHome: function () {
      this.$router.replace('/')
    }
  }
}
</script>

<style>
</style>
