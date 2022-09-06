<template>
  <div>
    <header-vue></header-vue>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
import FooterVue from "@/components/common/Footer.vue";
import HeaderVue from "@/components/common/Header.vue";

export default {
  name: "Home",
  components: {FooterVue, HeaderVue},
};
</script>