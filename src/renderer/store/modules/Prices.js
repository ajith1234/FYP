import axios from 'axios'

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const state = {
    Coins: [],
    load: true,

}

const mutations = {
    setCoins(state, data) {
        state.Coins = data

        console.log(state.Coins)
    },
    setLoadFalse(state) {
        state.load = false
    },
    setLoadTrue(state) {
        state.load = true
    }



}

const actions = {
    getData({ commit }, state, rootState) {
        //creates function to make API call
        function ApiCall() {
            axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=12")
                .then((res) => {
                    console.log(res.data)
                    let sort = [];

                    for (var i = 0; i < res.data.length; i++) {

                        sort.push({
                            name: res.data[i].name,
                            price: res.data[i].price_usd,
                            Pchange: res.data[i].percent_change_24h,
                            marketcap: numberWithCommas(res.data[i].market_cap_usd),
                            symbol: res.data[i].symbol
                        })

                    }

                    sort.reverse

                    commit("setCoins", sort)
                }).catch((error) => {
                    console.log(error)
                })
        }

        ApiCall() //calls it before there is a interval
        setInterval(ApiCall, 10000) //sets interval to run timed job
    }
}

const getters = {
    getCoin(state) {
        return state.Coins
    },

    getCoinNames(state) {
        return state.Coins.map((coin, index, array) => { return coin.name })
    }
}



export default {
    state,
    mutations,
    getters,
    actions
}