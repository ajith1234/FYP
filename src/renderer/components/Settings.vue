<template>
 <v-container grid-list-xs>
   <v-layout row wrap>
     <v-flex xs10 offset-xs1>
        <v-card dark>
          <v-card-text class="text-xs-center display-3">Settings</v-card-text>
        </v-card>
      </v-flex>

<v-flex xs12>
  <v-form>
     <v-text-field
      label="Please Enter your name.."
      v-model="name"
      :rules="nameRules"
      :counter="15"
      required
    ></v-text-field>
     <v-select
      label="Currency"
      v-model="currency"
      :items="CurrOptions"
      required
    ></v-select>
     <v-btn @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
</v-flex>

   </v-layout>
 </v-container>
</template>
<script>
import { mapGetters } from 'vuex'


export default {
    name: "settings",
    data: () => ({
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      name: "",
      currency: null

    }),
    methods: {
      submit(e){
        e.preventdefault
        this.$store.commit("changeName", this.name)
        this.$store.commit("changeCurrency", this.currency)
        console.log(this.name +  this.currency)
        
        
        // console.log(this.$store.state.UserName)
        // console.log(this.$store.state.currency)
      },
      clear(){

      }
    },
    computed: {
    
    ...mapGetters({
      UserName: 'getName',
      CurrOptions: 'getCurrencyOptions',
    })  
    }
}
</script>
<style>

</style>
