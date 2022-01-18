<template>
  <router-view />
</template>

<script lang="ts">
import useLocale from "@/composables/useLocale";
import useAuth from "@/composables/useAuth";
import { defineComponent, onMounted } from "vue";
export default defineComponent({
  setup() {
    const { initAppLocale } = useLocale();
    const { initAppAuthen } = useAuth();
    onMounted(() => {
      initAppLocale();
      initAppAuthen();
    });
  },
});
</script>
