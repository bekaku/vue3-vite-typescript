<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/i18n/en?chageLocale=true">I18n</router-link> |
    <router-link :to="{ name: 'TypeTest' }">TypeTest</router-link> | 
    <router-link to="/auth">Auth</router-link> |
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  components: {},

  setup() {},
});
</script>
