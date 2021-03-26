<template>
  <HelloI18n></HelloI18n>
  <br />
  <button @click="WeeGoTo('/')">Back</button>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import { useBase } from "@/composables/useBase";

const HelloI18n = defineAsyncComponent(
  () => import("@/components/HelloI18n.vue")
);
export default defineComponent({
  components: {
    HelloI18n,
  },
  setup() {
    
    const { WeeGetParam, WeeGetQuery, WeeGoTo } = useBase();
    console.log(
      "i18n > setup",
      "getParam : " + WeeGetParam("locale"),
      "getQuery : " + WeeGetQuery("chageLocale")
    );
    return {
      WeeGoTo,
    };
  },
});
</script>
