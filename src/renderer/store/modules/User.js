const state = {
    UserName: "",
    currency: {
        curr: "USD",
        symbol: "$"
    },
    currencyOptions: [{
            curr: "USD",
            symbol: "$"
        },
        {
            curr: "GBP",
            symbol: "£"
        },
        {
            curr: "EUR",
            symbol: "€"
        }
    ]
}

const mutations = {
    changeName(state, name) {
        state.UserName = name
    },

    changeCurrency(state, curr) {
        state.currency.curr = curr;
        state.currency.symbol = state.currencyOptions.find(a => a.curr === curr).symbol

    }

}

const actions = {

}

const getters = {
    getName(state) {
        return state.UserName
    },
    getCurrencyOptions(state) {
        return state.currencyOptions.map(curr => curr.curr)
    },
    getCurrency(state) {
        return state.currency
    },
    getCurrencySymbol(state, currency) {
        return state.currencyOptions.find(a => a.curr === currency)
    }

}

export default {
    state,
    mutations,
    getters,
    actions
}