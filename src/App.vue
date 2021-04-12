<template>
  <router-view />
</template>

<script lang="ts">
import useLocale from "@/composables/useLocale";
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
