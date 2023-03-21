const state = () => ({
  items: []
})

// getters
const getters = {
  cartProducts: (state) => {
    return state.items;
  }
}

// actions
const actions = {
  addItemToStandards ({ state, commit }, standard) {
        commit('addItemToStandards', { standard })
  },
  removeItemFromStandards ({ state, commit }, standard) {
        commit('removeItemFromStandards', { standard })
    },
  clearAll ({ state, commit }) {
        commit('clearAll')
    },
}

// mutations
const mutations = {
    addItemToStandards (state, { standard }) {
        state.items.push(standard)
    },
    removeItemFromStandards (state, { standard }) {
        state.items = state.items.filter(s => s.code != standard.code)
    },
    clearAll (state) {
        state.items = [];
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
