<template>
  <button
    class="py-2 px-4 rounded bg-green-500 hover:bg-green-400 text-white transition duration-200 ease-out"
    v-bind="$attrs"
  >
    <slot />
  </button>

  <Suspense>
    <template #default>
      <TypeTest
        msg="Hello Vue 3.0 + Vite"
        :message="{
          title: 'title',
          okMessage: 'okay',
          cancelMessage: 'cancel',
        }"
      ></TypeTest>
    </template>
    <template #fallback> Pleas wait... </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
const TypeTest = defineAsyncComponent(
  () => import("/@/components/TypeTest.vue")
);

export default defineComponent({
  name: "VButton",
  inheritAttrs: false,
  components: {
    TypeTest,
  },
});
</script>
