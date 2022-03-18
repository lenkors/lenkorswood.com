<template>
  <svg  xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :style="customStyle" :viewBox="viewBox">
    <use :href="uri"></use>
  </svg>
</template>

<script>
import sprite from '@/assets/svg/icons.svg';

export default {
  name: "IconBase",
  props: {
    title: {
      type: String,
      required: false,
    },
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    customStyle: {
      type: String,
      required: false
    },
    viewBox: {
      type: String,
      required: false
    }
  },
  computed: {
    uri() {
      return `${sprite}#${this.title}`;
    },
  }
};
</script>

<style lang="scss" scoped>
use {
  fill: currentColor;
}
</style>
