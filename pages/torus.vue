<template>
  <div style="padding: 50px">
    <nuxt-link to="/cube" class="linkPage -right">Go To Cube</nuxt-link>
  </div>
</template>

<script>
import SceneTorus from '~/webgl/Scenes/SceneTorus'

export default {
  name: 'TorusPage',
  beforeRouteEnter(to, from, next) {
    next(() => {
      const sceneTorus = new SceneTorus()

      sceneTorus.centerCamera(from.name ? 1500 : 0)

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
