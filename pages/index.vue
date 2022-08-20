<template>
  <div>
    <Tutorial />
  </div>
</template>

<script>
import Cube from '~/webgl/Scenes/Cube'

export default {
  name: 'IndexPage',
  mounted() {
    this.cube = new Cube()

    this.cube.startRotation()
  },
}
</script>
