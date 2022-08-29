<template>
  <div class="extraLinks">
    <a href="https://github.com/valentinsld/boilerplate-nuxt-three"
      >Boilerplate on Github</a
    >
    <a href="https://www.valentinsld.fr">by Valentin Sld</a>
  </div>
</template>

<script>
export default {
  name: 'ExtraLinks',
}
</script>

<style scoped>
.extraLinks {
  position: absolute;
  z-index: 10;
  bottom: 20px;
  right: 40px;
  display: flex;
}

.extraLinks a {
  margin-left: 20px;
  color: white;
}
</style>
