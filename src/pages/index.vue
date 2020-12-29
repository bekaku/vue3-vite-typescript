<template>
  <div>
    <img alt="Vue I18n logo" width="125" src="/@/assets/robot.png" />
    <h1>Hello Vite + Vue 3!</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {},
  setup() {
//   setup(props, context) {
//   setup(props, {attrs,slots,emit, root, refs}) {
    const count = ref(0);
    return {
      count,
    };
  },
});
</script>
