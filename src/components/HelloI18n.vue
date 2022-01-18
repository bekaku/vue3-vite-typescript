<template>
  <h1>{{ tc("welcome", ["Vue3"]) }}</h1>
  <button @click="count++">{{ tc("count", { count }) }}</button>

  <p>Hello I18n</p>
  <form>
    <label>{{ tc("language") }}</label>
    <select v-model="locale">
      <option value="en">en</option>
      <option value="th">th</option>
    </select>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import useLocale from "@/composables/useLocale";

export default defineComponent({
  name: "HelloI18n",
  setup() {
    const count = ref(0);
    // use local composer
    const { locale, tc, SetLocale } = useLocale();
    console.log(
      "components > HelloI18n ",
      " Get Message",
      tc("app.name"),
      tc("count", { count: count.value })
    );
    // const { t, locale } = useI18n({
    //   // `locale` inherit from global composer
    //   inheritLocale: true,
    // });

    return { count, tc, locale, SetLocale };
  },
});
</script>
