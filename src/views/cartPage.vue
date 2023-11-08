<template>
    <div>
        <h1>hello cart</h1>
        <!-- 商品 Item 项组件 -->
        <cart-item v-for="item in list" :key="item.id" :item="item"></cart-item>
        <cart-footer :total="total" :totalPrice="totalPrice"></cart-footer>
    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import cartItem from '../components/cartItem.vue';
import cartFooter from '../components/cartFooter.vue';
export default {
    components: {
        cartItem,
        cartFooter,
    },
    created() {
        this.$store.dispatch('cart/getList')
    },
    computed: {
        ...mapState('cart', ['list']),
        ...mapGetters('cart', ['total', 'totalPrice'])
    },
};
</script>
<style lang="css" scoped>
</style>