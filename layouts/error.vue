<template>
  <div>
    <!-- <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink> -->
  </div>
</template>

<script>
import SceneError from '~/webgl/Scenes/SceneError'

export default {
  name: 'LayoutError',
  layout: 'error', // you can set a custom layout for the error page
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.sceneError = new SceneError(this.error.statusCode)
    this.sceneError.centerCamera(0)
  },
}
</script>
