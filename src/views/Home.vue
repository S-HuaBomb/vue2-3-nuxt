<template>
  <div>
    <header-vue></header-vue>
    <nav-swiper-vue></nav-swiper-vue>
    <new-goods-vue></new-goods-vue>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
import FooterVue from "@/components/common/Footer.vue";
import HeaderVue from "@/components/common/Header.vue";
import NavSwiperVue from "@/components/index/NavSwiper.vue";
import NewGoodsVue from "@/components/index/NewGoods.vue";

export default {
  name: "Home",
  components: {FooterVue, HeaderVue, NavSwiperVue, NewGoodsVue},
};
</script>