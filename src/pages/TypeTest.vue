<template>
  <p>Typescript TEst</p>
  <type-test-com
    msg="Hello Vue 3.0 + Vite"
    :message="{
      title: 'title',
      okMessage: 'okay',
      cancelMessage: 'cancel',
    }"
    @on-submit="onSubmit"
  ></type-test-com>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
const TypeTestCom = defineAsyncComponent(
  () => import("@/components/TypeTestCom.vue")
);

export default defineComponent({
  name: "TypeTest",
  components: {
    TypeTestCom,
  },
  setup() {
    const onSubmit = (from: string): void => {
      console.log(`TypeTest > onSubmit() : '${from}'`);
    };
    return {
      onSubmit,
    };
  },
});
</script>
