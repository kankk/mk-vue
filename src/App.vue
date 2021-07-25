<template>
  <div class="layout">
    <MkSidebar class="sidebar" />
    <div class="wrap">
      <MkHeader class="header" />
      <div class="content">
        Content
      </div>
      <MkFooter class="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MkSidebar from './layouts/Sidebar.vue';
import MkHeader from './layouts/Header.vue';
import MkFooter from './layouts/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    MkSidebar,
    MkHeader,
    MkFooter,
  },
});
</script>

<style lang="scss">
@import './layouts/layout.scss';
#app {
  height: 100vh;
  overflow: hidden;
}
</style>
