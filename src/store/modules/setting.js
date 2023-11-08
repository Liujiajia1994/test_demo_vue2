const state = {
    theme: 'dark',
    desc: '描述真呀真不错'
  }
  
const mutations = {
    setTheme (state, newTheme) {
        state.theme = newTheme
    }
}

const actions = {}

const getters = {}
  
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }