<template>
    <div class="goods-container">
      <!-- 左侧图片区域 -->
      <div class="left">
        <img :src="item.thumb" class="avatar" alt="">
      </div>
      <!-- 右侧商品区域 -->
      <div class="right">
        <!-- 标题 -->
        <div class="title">{{item.name}}</div>
        <div class="info">
          <!-- 单价 -->
          <span class="price">￥{{item.price}}</span>
          <div class="btns">
            <!-- 按钮区域 -->
            <button class="btn btn-light" @click="onBtnClick(-1)" >-</button>
            <span class="count">{{item.count}}</span>
            <button class="btn btn-light" @click="onBtnClick(1)" >+</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CartItem',
    props: {
      item: Object
    },
    methods: {
        onBtnClick(step) {
            const count = this.item.count + step;
            if (count < 0) return;
            this.$store.dispatch('cart/updateCount', {
                id: this.item.id,
                count,
            });
        }
    }
  }
  </script>