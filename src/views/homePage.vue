<template>
    <div>
        <h1>根组件</h1>
        <input @input="inputCount" type="text" />
        <SonConponent1></SonConponent1>
        <hr />
        <SonConponent2></SonConponent2>
    </div>
</template>
<script>
import SonConponent1 from '../components/SonConponent1.vue';
import SonConponent2 from '../components/SonConponent2.vue';
export default {
    components: {
        SonConponent1,
        SonConponent2,
    },
    created() {
        console.log(this.$store);
    },
    methods: {
        inputCount(e) {
            const num = +e.target.value; // 前端加+会转成number类型
            this.$store.commit('changeCount', num);
        },
    },
}
</script>
<style lang="css" scoped>
</style>