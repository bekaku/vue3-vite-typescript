<template>
  <div>Side bar</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import useAppSetting from "@/composables/useAppSetting";
import useLocale from "@/composables/useLocale";
// import { useDisplay } from "vuetify/lib/composables/display";
export default defineComponent({
  setup() {
    const { drawer, setDrawer } = useAppSetting();
    const { tc } = useLocale();
    onMounted(() => {
      // default close drawer on page load
      // if (smAndDown.value) {
        setDrawer(false);
      // }
    });
    return {
      drawer,
      tc,
    };
  },
});
</script>
