import axios from "axios";
export default {
    namespaced: true,
    state() {
        return {
            list: [],
        }
    },
    getters: {
        // 对于state中数据的一种过滤，属于一种加强属性
        total(state) {
            // reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
            return state.list.reduce((p, c) => p + c.count, 0);
        },
        totalPrice(state) {
            return state.list.reduce((p, c) => p + c.price * c.count, 0);
        }
    },
    mutations: {
        updateList(state, data) {
            state.list = data;
        },
        updateCount(state, obj) {
            const good = state.list.find(item => item.id === obj.id);
            good.count = obj.count;
        },
    },
    actions: {
        async getList(context) {
            const res = await axios.get('http://localhost:3000/data');
            context.commit('updateList', res.data);
        },
        async updateCount(context, obj) {
            await axios.patch('http://localhost:3000/data/' + obj.id, {
                count: obj.count
            })
            context.commit('updateCount', obj)
        },
    }
}