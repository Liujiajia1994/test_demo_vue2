<template>
    <div class="box">
        <h2>son2子组件</h2>
        从vuex中获取的值: <label>{{ count }}</label>
        <br/>
        <button @click="handleSub(1)">值-1</button>
        <button @click="handleSub(5)">值-5</button>
        <button @click="handleSub(10)">值-10</button>
        <button @click="setAsyncCount(666)">1秒后变成666</button>
        <button @click="setUser({ name: 'xiaoli', age: 80 })">更新个人信息</button>
        <button @click="setTheme('skyblue')">更新主题</button>
        <button @click="setAsyncUserInfo({name: 'liujiajia', age: 29})">一秒更换信息</button>
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
    computed: {
        ...mapState(['count']),
    },
    methods: {
        handleSub(n) {
            this.$store.commit('subCount', n);
        },
        ...mapActions(['setAsyncCount']),
        // 等价于
        // setAsyncCount(n) {
        //     this.$store.dispatch('setAsyncCount', n);
        // },
        ...mapMutations('setting', ['setTheme']),
        ...mapMutations('user', ['setUser']),
        ...mapActions('user', ['setAsyncUserInfo'])
    },
};
</script>
<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>