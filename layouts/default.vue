<template>
  <Nuxt style="position: relative; z-index: 1" />
</template>

<script>
import WebGL from '~/webgl/index'

export default {
  name: 'LayoutDefault',
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
