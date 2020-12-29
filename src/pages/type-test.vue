<template>
  <VButton></VButton>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
const VButton = defineAsyncComponent(() => import("/@/components/VButton.vue"));
export default defineComponent({
  components: {
    VButton,
  },
});
</script>
