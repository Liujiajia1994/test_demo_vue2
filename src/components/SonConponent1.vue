<template>
    <div class="box">
        <!-- <h1>22{{ $store.getters['user/UpperCaseName'] }}</h1> -->
        <h1>11.{{ setting.theme }}</h1>
        <h1>12.{{ userInfo.age }}</h1>
        <h1>13.{{ UpperCaseName }}</h1>
        <h2>son1子组件</h2>
        从vuex中获取的值: <label>{{ count }}</label>
        <br/>
        <button @click="handleAdd">值+1</button>
        <br />
        <!-- <div>过滤数组{{ $store.getters.filterList }}</div> -->
        <div>过滤数组{{ filterList }}</div>
        <button @click="updateUser">更新个人信息</button> 
        <button @click="updateTheme">更新主题色</button> 
        <button @click="setAsyncUserInfo">一秒更换信息</button> 
    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapState(['count', 'setting']),
        ...mapState('user', ['userInfo']), // 要分开写
        // ...mapState(['count', 'user']),
        // count() {
        //     return this.$store.state.count;
        // },
        ...mapGetters(['filterList']),
        ...mapGetters('user', ['UpperCaseName']),
    },
    methods: {
        handleAdd() {
            this.$store.commit('addCount');
        },
        updateUser() {
            // $store.commit('模块名/mutation名', 额外传参)
            this.$store.commit('user/setUser', {
                name: 'liujiajia',
                age: 29,
            })
        },
        updateTheme () {
            this.$store.commit('setting/setTheme', 'pink')
        },
        setAsyncUserInfo() {
            this.$store.dispatch('user/setAsyncUserInfo', {
                name: 'zhangheng',
                age: 29
            })
        },
    }
}
</script>
<style lang="css" scoped>
.box{
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>