<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/i18n/en?chageLocale=true">I18n</router-link> |
    <router-link :to="{ name: 'TypeTest' }">TypeTest</router-link> |
    <router-link to="/auth">Auth</router-link> |
    <router-link to="/vuex">Vuex</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { useLocale } from "@/composables/useLocale";
import { defineComponent, onMounted } from "vue";
export default defineComponent({
  setup() {
    const { initAppLocale } = useLocale();
    onMounted(() => {
      initAppLocale();
    });
  },
});
</script>
