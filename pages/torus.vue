<template>
  <div style="padding: 50px">
    <nuxt-link to="/torus">Go To Torus</nuxt-link>
    <nuxt-link to="/cube">Go To Cube</nuxt-link>
    <nuxt-link to="/cylinder">Go To Cylinder</nuxt-link>
  </div>
</template>

<script>
import SceneTorus from '~/webgl/Scenes/SceneTorus'

export default {
  name: 'TorusPage',
  beforeRouteEnter(to, from, next) {
    next(() => {
      const sceneTorus = new SceneTorus()

      sceneTorus.centerCamera(from.name ? 1000 : 0)
    })
  },
}
</script>
