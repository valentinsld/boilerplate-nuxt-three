<template>
  <div style="padding: 50px">
    <nuxt-link to="/torus">Go To Torus</nuxt-link>
    <nuxt-link to="/cube">Go To Cube</nuxt-link>
    <nuxt-link to="/cylinder">Go To Cylinder</nuxt-link>
  </div>
</template>

<script>
import SceneCube from '~/webgl/Scenes/SceneCube'

export default {
  name: 'CubePage',
  beforeRouteEnter(to, from, next) {
    next(() => {
      const sceneCube = new SceneCube()

      sceneCube.centerCamera(from.name ? 1000 : 0)

      sceneCube.startRotation()
    })
  },
  destroyed() {
    setTimeout(() => {
      const sceneCube = new SceneCube()

      sceneCube.stopRotation()
    }, 1000)
  },
}
</script>
