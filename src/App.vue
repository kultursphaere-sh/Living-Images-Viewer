<template>
  <div id="living-images-viewer-app">
    <template>
      <ar-viewer class="h-100 d-flex flex-column" />
    </template>
  </div>
</template>

<script>
import 'focus-visible/dist/focus-visible.min.js'
import ArViewer from '@/views/ARViewer.vue'

export default {
  name: 'LivingImagesViewerApp',
  components: {
    ArViewer
  }
}
</script>

<style lang="scss">
// Import Bootstrap and Bootstrap-Vue source SCSS files
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

html, body {
  height: 100%;
  width: 100%;
  background-color: #f0f0f0; // background behind page for mobile devices when scrolling beyond border
  color: $gray-very-dark;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  overflow: auto;
}

#living-images-viewer-app {
  height: 100%;
  width: 100%;
  min-width: 312px;
  background-color: $background;
}

a {
  color: $primary;
}

a:active, a:hover {
  color: $primary-light;
  text-decoration: none;
}

/*
  This will hide the focus indicator if the element receives focus via the mouse,
  but it will still show up on keyboard focus.
*/
.js-focus-visible :focus:not(.focus-visible) {
  outline: none;
  box-shadow: none;
}
</style>
