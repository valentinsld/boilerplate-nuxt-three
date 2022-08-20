<template>
  <div style="padding: 50px">
    <button>Test</button>
  </div>
</template>

<script>
import SceneCube from '~/webgl/Scenes/SceneCube'
import SceneCylinder from '~/webgl/Scenes/SceneCylinder'
import SceneTorus from '~/webgl/Scenes/SceneTorus'

export default {
  name: 'IndexPage',
  mounted() {
    this.sceneCube = new SceneCube()
    this.sceneCylinder = new SceneCylinder()
    this.sceneTorus = new SceneTorus()

    this.sceneCube.startRotation()
  },
}
</script>
