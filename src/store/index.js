// 导入 vue
import Vue from 'vue'
// 导入 vuex
import Vuex from 'vuex'
import user from './modules/user'
import setting from './modules/setting'
import cart from './modules/cart'


// vuex也是vue的插件, 需要use一下, 进行插件的安装初始化
Vue.use(Vuex)

// 创建仓库
const store = new Vuex.Store({
    modules: {
        user,
        setting,
        cart,
    },
    // state 状态, 即数据, 类似于vue组件中的data,
    // 区别：
    // 1.data 是组件自己的数据,
    // 2.state 中的数据整个vue项目的组件都能访问到
    state: {
        count: 0,
        lists: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    getters: {
        filterList: state => state.lists.filter(e => e>5),
    },
    mutations: {
        // 同步修改
        addCount(state) {
            state.count++;
        },
        subCount(state, n) {
            state.count -= n;
        },
        changeCount(state, n) {
            state.count = n;
        },
    },
    actions: {
        // 异步修改
        setAsyncCount(context, n) {
            setTimeout(() => {
                context.commit('changeCount', n);
            }, 1000);
        },
    }
})

// 导出仓库
export default store