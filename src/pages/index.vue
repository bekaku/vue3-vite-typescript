<template>
  <div>
    <p>{{ tc("base.pleaseWait") }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useLocale from "@/composables/useLocale";
import useBase from "@/composables/useBase";
import useAuth from "@/composables/useAuth";
export default defineComponent({
  components: {},
  setup() {
    const { tc } = useLocale();
    const { WeeGoTo } = useBase();
    const { CurrentAuth } = useAuth();
    if (CurrentAuth()) {
      setTimeout(() => {
        WeeGoTo("/home", true);
      }, 500);
    } else {
      setTimeout(() => {
        WeeGoTo("/auth/login", true);
      }, 500);
    }
    return {
      tc,
    };
  },
});
</script>
