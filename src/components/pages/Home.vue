<template>
  <div id="home">
    <img src="../../assets/icon.png">
    <label>noflake</label>
    <br><br><br><br><br>
    <q-btn @click="goToAuthenticationPage" class="accountNoFlakeBTN noflakeBTN" icon="account box" big flat>ACCOUNT</q-btn> 
    <q-btn @click="goToSearchProvidersPage" class="searchNoFlakeBTN noflakeBTN" icon="search" big flat>SEARCH PROVIDERS</q-btn>
  </div>
</template>

<script>
import { QBtn } from 'quasar'

export default {
  name: 'home',
  data: function () {
    return {

    }
  },
  components: { QBtn },
  methods: {
    goToSearchProvidersPage: function () {
      this.$router.replace('search-providers')
    },
    goToAuthenticationPage: function () {
      this.$router.replace('auth')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~variables'

img
  width 300px
  height 300px
  margin auto
  display block

label 
  font-size 50px
  color white

.noflakeBTN
  font-size 15px
  width 90%
  max-width 300px
  padding 5px
  margin 5px
  font-weight bold

.accountNoFlakeBTN
  background white
  color black

.searchNoFlakeBTN
  color white
  border 1px solid white

#home
  padding-top 50px
  position: relative
  height 100vh
  width 100vw
  background: black url(../../assets/bg.jpg)
  background-size 200vh
  background-position: 50% 50%;


</style>
