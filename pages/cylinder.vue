<template>
  <div>
    <nuxt-link to="/cube" class="linkPage">Go To Cube</nuxt-link>
  </div>
</template>

<script>
import SceneCylinder from '~/webgl/Scenes/SceneCylinder'

export default {
  name: 'CylinderPage',
  beforeRouteEnter(to, from, next) {
    next(() => {
      const sceneCylinder = new SceneCylinder()

      sceneCylinder.centerCamera(from.name ? 1500 : 0)

      sceneCylinder.entered()
    })
  },
  destroyed() {
    setTimeout(() => {
      const sceneCylinder = new SceneCylinder()

      sceneCylinder.exit()
    }, 1000)
  },
}
</script>
