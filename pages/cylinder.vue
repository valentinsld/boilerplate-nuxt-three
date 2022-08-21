<template>
  <div style="padding: 50px">
    <nuxt-link to="/torus">Go To Torus</nuxt-link>
    <nuxt-link to="/cube">Go To Cube</nuxt-link>
    <nuxt-link to="/cylinder">Go To Cylinder</nuxt-link>
  </div>
</template>

<script>
import SceneCylinder from '~/webgl/Scenes/SceneCylinder'

export default {
  name: 'CylinderPage',
  beforeRouteEnter(to, from, next) {
    next(() => {
      const sceneCylinder = new SceneCylinder()

      sceneCylinder.centerCamera(from.name ? 1000 : 0)
    })
  },
}
</script>
