<template>
  <Nuxt style="position: relative; z-index: 1" />
</template>

<script>
import WebGL from '~/webgl/index'

export default {
  name: 'LayoutDefault',
  transition: 'fade',
  data() {
    return {
      webgl: null,
    }
  },
  mounted() {
    this.webgl = new WebGL()
    this.webgl.appendCanvas(this.$el.parentElement)
  },
  destroyed() {
    this.webgl.destroy()
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
