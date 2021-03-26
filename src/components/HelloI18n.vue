<template>
  <h1>{{ WeeTranslate("welcome", ["Vue3"]) }}</h1>
  <button @click="count++">{{ WeeTranslate("count", { count }) }}</button>

  <p>Hello I18n</p>
  <form>
    <label>{{ WeeTranslate("language") }}</label>
    <select v-model="locale">
      <option value="en">en</option>
      <option value="th">th</option>
    </select>
  </form>
  <p>
    <button @click="SetLocale('th')">Change Locale</button>
  </p>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { useLocale } from "@/composables/useLocale";

export default defineComponent({
  name: "HelloI18n",
  setup() {
    const count = ref(0);
    // use local composer
    const { locale, WeeTranslate, SetLocale } = useLocale();
    console.log(
      "components > HelloI18n ",
      " Get Message",
      WeeTranslate("app.name"),
      WeeTranslate("count", { count: count.value })
    );
    // const { t, locale } = useI18n({
    //   // `locale` inherit from global composer
    //   inheritLocale: true,
    // });

    return { count, WeeTranslate, locale, SetLocale };
  },
});
</script>
