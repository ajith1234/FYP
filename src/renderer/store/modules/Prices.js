import axios from 'axios'

const state = {
    Coins: [],
    load: true,

}

const mutations = {
    setCoins(state, data) {
        state.Coins = data
        state.load = !state.load
        console.log(state.load)
    },


}

const actions = {
    getData({ commit }, state) {
        axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=10")
            .then((res) => {
                console.log(res.data)
                commit("setCoins", res.data)
            }).catch((error) => {
                console.log(error)
            })


    }
}

export default {
    state,
    mutations,
    actions
}