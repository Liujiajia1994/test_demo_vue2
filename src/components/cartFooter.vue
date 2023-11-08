<template>
    <div class="footer-container">
      <!-- 中间的合计 -->
      <div>
        <span>共 {{ total }} 件商品，合计：</span>
        <span class="price">￥{{ totalPrice }}</span>
      </div>
      <!-- 右侧结算按钮 -->
      <button class="btn btn-success btn-settle">结算</button>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'cartFooter',
    computed: {
        ...mapGetters('cart', ['total', 'totalPrice'])
    },
}
</script>