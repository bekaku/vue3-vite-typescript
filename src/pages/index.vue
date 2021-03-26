<template>
  <div>
    <img alt="Vue I18n logo" width="125" src="@/assets/robot.png" />
    <h1>{{ WeeTranslate("app.name") }}</h1>
    <!-- <p>DefaultLocale {{ DefaultLocale }}</p> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useLocale } from "@/composables/useLocale";
// import { SiteUrl } from "@/config/config";
export default defineComponent({
  components: {},
  setup() {
    const { WeeTranslate } = useLocale();
    //   setup(props, context) {
    //   setup(props, {attrs,slots,emit, root, refs}) {
    const count = ref(0);
    return {
      count,
      WeeTranslate,
      // DefaultLocale,
    };
  },
});
</script>
