// initial state
const state = {
    auth: null,
  };
  
  // getters
  const getters = {};
  
  // mutations
  const mutations = {
    setAuthen(state: any, auth: any) {
      state.auth = auth;
    },
  };
  
  // actions
  const actions = {
    setAuthenAction(context: any, payload: any) {
      context.commit("setAuthen", payload);
    },
    logoutAction(context: any) {
      context.commit("setAuthen", null);
    },
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  };
  