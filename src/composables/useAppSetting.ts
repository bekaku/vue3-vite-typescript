import { useStore } from "vuex";
import { computed } from "vue";
export const useAppSetting = () => {
  const store = useStore();
  // access a state in computed function store.state.count
  const count = computed(() => store.state.appSetting.count);
  // access a getter in computed function store.getters.isMoreThanTen
  const isMoreThanTen = computed(() => store.getters["appSetting/isMoreThanTen"]);

  // access a mutation
  const increment = () => store.commit("appSetting/increment");

  // access an action
  const incrementAction = () => store.dispatch("appSetting/incrementAction");

  return {
    // count : computed(() => store.state.count)
    count,
    isMoreThanTen,
    increment,
    incrementAction,
  };
};
