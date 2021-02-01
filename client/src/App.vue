<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import defaultLayout from './views/layout/default.vue';
export default {
  components: {
    defaultLayout
  }
}
</script>
