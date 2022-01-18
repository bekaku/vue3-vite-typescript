// initial state
const state = {
  count: 0,
  locale: undefined,
  drawer: true,
};

// getters
const getters = {
  isMoreThanTen(state: any) {
    return state.count > 10;
  },
};

// mutations
const mutations = {
  increment(state: any, no: number = 1) {
    state.count = state.count + no;
  },
  setLocale(state: any, lang: string) {
    state.locale = lang;
  },
  setDrawer(state: any, open: boolean) {
    state.drawer = open;
  },
};

// actions
const actions = {
  incrementAction(context: any, no: number = 1) {
    context.commit("increment", no);
  },
  setLocaleAction(context: any, lang: string) {
    context.commit("setLocale", lang);
  },
  setDrawerAction(context: any, open: boolean) {
    context.commit("setDrawer", open);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
