<template>
  <div id="app">
    <v-app id="inspire" dark>
      <nav-bar></nav-bar>
     <v-content>
      <v-container fluid fill-height>
       <v-slide-y-transition mode="out-in">
            <router-view class="content"></router-view>
          </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-footer app fixed>
       
      <span class="ml-1">&copy; Ajith Abraham 2018</span>
    </v-footer>
  </v-app>
  </div>
</template>

<script>
   import Navbar from './components/Navbar.vue'

  export default {
    name: 'cryptoprices',
    components: {
      'nav-bar': Navbar
    },
    data: () => ({
        
     
    })
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
  /* Global CSS */

 html {
    overflow: scroll;
    overflow-x: hidden;
}
::-webkit-scrollbar {
    width: 0;
    background: transparent;  /* optional: just make scrollbar invisible */
}



</style>
