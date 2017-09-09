<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <q-btn @click="goBackToHome" class="noflakeBTN" icon="search" big flat>GO BACK</q-btn>
  </div>
</template>

<script>
import { QBtn } from 'quasar'

export default {
  components: { QBtn },
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
