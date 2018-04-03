<template>
<div>
   <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile
         router
         :to="'home'">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile  
        router
        :to="'settings'">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left class="draggable">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="nodrag"></v-toolbar-side-icon>
      <v-toolbar-title>CryptoPrices</v-toolbar-title>
      <v-spacer></v-spacer>
       <v-btn small icon color="info controls"  v-on:click.native="min" class="nodrag"><v-icon small>remove</v-icon></v-btn>
      <v-btn small icon color="warning controls" v-on:click.native="max" class="nodrag"><v-icon small>add</v-icon></v-btn>
      <v-btn small icon color="error controls" v-on:click.native="close" class="nodrag"><v-icon small>close</v-icon></v-btn>
    </v-toolbar>
    </div>
</template>

<script>

export default {
    name: "navbar",
    data: () => ({
        drawer: false
    }),
    methods: {
       close: function () {
           this.$electron.remote.getCurrentWindow().close()
       },
       min: function () {
           this.$electron.remote.getCurrentWindow().minimize()

       },
       max: function () {
           this.$electron.remote.getCurrentWindow().maximize()
       } 

       
    }
}
</script>

<style scoped>
.draggable {
    -webkit-app-region: drag;
}
.nodrag{
    -webkit-app-region: no-drag;
}

</style>
