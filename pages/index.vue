<template>
  <div>
    <nuxt-link to="/torus" class="linkPage">Go To Torus</nuxt-link>
    <nuxt-link to="/cylinder" class="linkPage -right">Go To Cylinder</nuxt-link>
  </div>
</template>

<script>
import SceneCube from '~/webgl/Scenes/SceneCube'

export default {
  name: 'CubePage',
  beforeRouteEnter(to, from, next) {
    next((that) => {
      const sceneCube = new SceneCube()

      sceneCube.centerCamera(that.$nuxt.context.from ? 1500 : 0)

      sceneCube.entered()
    })
  },
  destroyed() {
    setTimeout(() => {
      const sceneCube = new SceneCube()

      sceneCube.exit()
    }, 1000)
  },
}
</script>
