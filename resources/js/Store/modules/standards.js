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
}

// mutations
const mutations = {
    addItemToStandards (state, { standard }) {
        state.items.push(standard)
    },
    removeItemFromStandards (state, { standard }) {
        state.items = state.items.filter(s => s.code != standard.code)
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
