<template>

  
    <v-layout row wrap>

       <v-flex xs10 offset-xs1>
        <v-card dark>
          <v-card-text class="text-xs-center display-3">Welcome {{UserName}}!</v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 height="200px">
        
      </v-flex>

      <v-flex xs4 v-for="Coin in Coins" :key="Coin.name">
       <v-card class="ma-2 pa-2 " height="20vh">
         <div :class="{'display-2 mb-4': $vuetify.breakpoint.mdAndUp}" class="headline text-xs-center">{{Coin.name}} ({{Coin.symbol}})</div>
         <div :class="{'headline': $vuetify.breakpoint.mdAndUp}" class="text-xs-left text-lg-center">Price: {{getCurr.symbol}}{{Coin.price}}</div>
      <p v-bind:class="{ 'red--text': (Coin.Pchange < 0), 'green--text':(Coin.Pchange>0), 'headline':$vuetify.breakpoint.mdAndUp }" class="text-xs-left text-lg-center">Change (24h): {{Coin.Pchange}}%</p>
         <div :class="{'headline': $vuetify.breakpoint.mdAndUp}" class="text-xs-left text-lg-center">Marketcap: {{getCurr.symbol}}{{Coin.marketcap}}</div>
        </v-card>   
      </v-flex>
    </v-layout>
  
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name: "home",
    data() {
      return{
        activeClass : 'text-success',
        redP : 'text-danger'
       
      }
    },
    computed: {
    
    ...mapGetters({
      Coins:'getCoin',
      CoinNames: 'getCoinNames',
      UserName: 'getName',
      getCurr: 'getCurrency'
    })  
    
    
    }
}


</script>
<style scoped>



</style>
