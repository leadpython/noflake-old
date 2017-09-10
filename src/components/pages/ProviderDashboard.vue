<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout ref="dashboard">
    <!-- opens drawer below -->
    <q-toolbar>
      <q-btn flat @click="$refs.dashboard.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>
      <q-toolbar-title>
        
      </q-toolbar-title>
      <q-btn flat>
        <q-icon name="more_vert" />
      </q-btn>
    </q-toolbar>

    <!-- Left Side Panel -->
    <q-scroll-area slot="left" id="dashboardSideMenu" style="width: 100%; height: 100%">
      <q-list no-border link inset-delimiter>
        <q-item @click="displayProviderID()">
          <q-item-side icon="school" />
          <q-item-main label="Profile" sublabel="" />
        </q-item>
        <q-item>
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Appointments" sublabel="" />
        </q-item>
        <q-item>
          <q-item-side icon="chat" />
          <q-item-main label="Services" sublabel="" />
        </q-item>
        <q-item @click="logout()">
          <q-item-side icon="rss feed" />
          <q-item-main label="Logout" sublabel="" />
        </q-item>
      </q-list>
    </q-scroll-area>

    <router-view />

    <!-- Footer -->
    <q-toolbar slot="footer">
    </q-toolbar>
  </q-layout>
</template>

<script>
import { QLayout, QToolbar, QList, QItem, QItemSide, QItemMain, QListHeader, QTabs, QRouteTab, QToolbarTitle, QBtn, QIcon, QScrollArea } from 'quasar'

export default {
  props: ['auth', 'authenticated'],
  mounted () {
    if (this.authenticated) {
    }
    else {
      this.auth.logout()
    }
  },
  components: { QLayout, QToolbar, QList, QItem, QItemSide, QItemMain, QListHeader, QTabs, QRouteTab, QToolbarTitle, QBtn, QIcon, QScrollArea },
  data () {
    return {
      isSideMenuShowing: false
    }
  },
  methods: {
    goBackToHome () {
      this.$router.replace('/')
    },
    logout () {
      this.auth.logout()
    },
    displayProviderID () {
      console.log(this.$store.state.accessToken)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
