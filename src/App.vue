<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <header></header>
    <main>
      <router-view
        :auth="auth"
        :authenticated="authenticated"
      ></router-view>
    </main>
  </div>
</template>

<script>
import AuthService from './auth/AuthService'

const auth = new AuthService()

const { login, logout, authenticated, authNotifier } = auth

export default {
  name: 'app',
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated
    }
  },
  methods: {
    login,
    logout
  }
}
</script>

<style lang="stylus">
@import '~variables'

#q-app
  min-height 100vh

main
  text-align center

header
  margin 0
  height 10px
  background-color $primary

</style>
