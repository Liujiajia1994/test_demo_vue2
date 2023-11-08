const state = {
    userInfo: {
      name: 'zs',
      age: 18
    }
  }
  
const mutations = {
    setUser (state, newUserInfo) {
        state.userInfo = newUserInfo
    }
}

const actions = {
    setAsyncUserInfo(context, info) {
        setTimeout(() => {
            context.commit('setUser', info)
        }, 1000);
    }
}

const getters = {
    // 分模块后，state指代子模块的state
  UpperCaseName (state) {
    return state.userInfo.name.toUpperCase()
  }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }