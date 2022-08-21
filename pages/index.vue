<template>
  <div style="padding: 50px">
    <button @click="goToTorus">Go To Torus</button>
    <button @click="goToCube">Go To Cube</button>
    <button @click="goToCylinder">Go To Cylinder</button>
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
  methods: {
    goToCube() {
      this.sceneCube.centerCamera()
    },
    goToCylinder() {
      this.sceneCylinder.centerCamera()
    },
    goToTorus() {
      this.sceneTorus.centerCamera()
    },
  },
}
</script>
