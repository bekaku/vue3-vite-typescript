<template>
  <div>
    <h1>Vuex</h1>
    <p>
      {{ `Count : ${count}` }}
    </p>
    <p>
      {{ `isMoreThanTen : ${isMoreThanTen}` }}
    </p>
    <p><button @click="increment">Increment Mutation</button></p>
    <p><button @click="incrementAction">Increment Action</button></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useAppSetting from "@/composables/useAppSetting";
export default defineComponent({
  components: {},
  setup() {
    const {
      count,
      isMoreThanTen,
      increment,
      incrementAction,
    } = useAppSetting();
    return {
      count,
      isMoreThanTen,
      increment,
      incrementAction,
    };
  },
});
</script>
