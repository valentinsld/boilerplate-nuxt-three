<template>
  <div>
    <nuxt-link to="/cube" class="linkPage -right">Go To Cube</nuxt-link>
  </div>
</template>

<script>
import SceneTorus from '~/webgl/Scenes/SceneTorus'

export default {
  name: 'TorusPage',
  beforeRouteEnter(to, from, next) {
    next((that) => {
      const sceneTorus = new SceneTorus()

      sceneTorus.centerCamera(that.$nuxt.context.from ? 1500 : 0)

      sceneTorus.entered()
    })
  },
  destroyed() {
    setTimeout(() => {
      const sceneTorus = new SceneTorus()

      sceneTorus.exit()
    }, 1000)
  },
}
</script>
