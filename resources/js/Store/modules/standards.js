const state = () => ({
  items: []
})

// getters
const getters = {
  cartProducts: (state) => {
    return state.items;
  },
  selectedStandardsCodes: state => state.items.map(s => s.code),
}

// actions
const actions = {
  toggleStandard ({ state, commit, getters }, standard) {
    if(getters.selectedStandardsCodes.indexOf(standard.code) == -1)
      commit('addItemToStandards', { standard })
    else
      commit('removeItemFromStandards', { standard })

  },
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
