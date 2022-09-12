<template>
  <button class="debugButton" @click="goToDebug">{{ textButton }}</button>
</template>

<script>
import WebGL from '~/webgl'

export default {
  name: 'DebugButton',
  data() {
    return {
      textButton: 'Enable #DEBUG',
    }
  },
  mounted() {
    this.debug = new WebGL().debug

    if (this.debug) {
      this.textButton = 'Disable #DEBUG'
    }
  },
  methods: {
    goToDebug() {
      window.location.hash = this.debug ? '' : 'debug'
      window.location.reload()
    },
  },
}
</script>

<style lang="scss">
.debugButton {
  all: unset;

  /* position */
  position: fixed;
  z-index: 1;
  bottom: 20px;
  left: 40px;

  /* style */
  cursor: pointer;
  transition: opacity 400ms var(--custom-ease);
  &:hover {
    opacity: 0.5;
  }
}
</style>
