<template>
  <h1>{{ t("welcome", ["Vue3"]) }}</h1>
  <button @click="count++">{{ t("count", { count }) }}</button>

  <p>Hello I18n</p>
  <form>
    <label>{{ t("language") }}</label>
    <select v-model="locale">
      <option value="en">en</option>
      <option value="th">th</option>
    </select>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "HelloI18n",
  setup() {
    const count = ref(0);
    // use local composer
    const { t, locale } = useI18n();
    // const { t, locale } = useI18n({
    //   // `locale` inherit from global composer
    //   inheritLocale: true,
    // });

    return { count, t, locale };
  },
});
</script>
