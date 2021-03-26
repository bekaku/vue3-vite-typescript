<template>
  <p>i18n.vue > Locale Store : {{ localeStore }}</p>
  <HelloI18n></HelloI18n>
  <br />
  <button @click="WeeGoTo('/')">Back</button>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import { useBase } from "@/composables/useBase";
import { useLocale } from "@/composables/useLocale";

const HelloI18n = defineAsyncComponent(
  () => import("@/components/HelloI18n.vue")
);
export default defineComponent({
  components: {
    HelloI18n,
  },
  setup() {
    const { WeeGetParam, WeeGetQuery, WeeGoTo } = useBase();
    const { localeStore } = useLocale();
    console.log(
      "i18n > setup",
      "getParam : " + WeeGetParam("locale"),
      "getQuery : " + WeeGetQuery("chageLocale")
    );
    return {
      WeeGoTo,
      localeStore,
    };
  },
});
</script>
