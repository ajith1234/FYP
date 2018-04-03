<template>
  <v-layout>
    <v-flex xs12 sm12 md12 lg12>
      <v-card class="elevation-16">
         <v-card-title primary-title>
            <v-container>
            <h1 class="display-3 text-xs-center">Dashboard</h1>
            <div class="text-xs-center">application dash</div>
            </v-container>
        </v-card-title>
        
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>

</template>
<script>
export default {
    name: "home"
}
</script>
<style>

</style>
