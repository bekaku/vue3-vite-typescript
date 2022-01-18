<template>
  <div>

    <button @click="WeeGoTo('/home')" class="mr-3" text>Home</button>
    <button @click="WeeGoTo('/i18n/en?chageLocale=true')" class="mr-3" text
      >I18n</button
    >
    <button @click="WeeGoTo('/type-test')" class="mr-3" text>TypeTest</button>
    <button @click="WeeGoTo('/vuex')" class="mr-3" text>Vuex</button>
    <button @click="WeeGoTo('/userList')" class="mr-3" text>UserList</button>
    <!-- <div id="nav">
        <router-link to="/home">Home</router-link> |
        <router-link to="/i18n/en?chageLocale=true">I18n</router-link> |
        <router-link :to="{ name: 'TypeTest' }">TypeTest</router-link> |
        <router-link to="/vuex">Vuex</router-link> |
        <router-link to="/userList">UserList</router-link>
      </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useBase from "@/composables/useBase";
import useAppSetting from "@/composables/useAppSetting";
import useAuth from "@/composables/useAuth";
import useLocale from "@/composables/useLocale";
import { mdiMagnify, mdiRocketLaunchOutline } from "@mdi/js";
export default defineComponent({
  setup() {
    const { WeeGoTo } = useBase();
    const { drawer, setDrawer } = useAppSetting();
    const { CurrentAuthStore } = useAuth();
    const { tc } = useLocale();
    const icons = { mdiMagnify };
    const notifications = ref([
      {
        icon: mdiRocketLaunchOutline,
        message: tc("helper.loginToSystem", [tc("app.backend.title")]),
      },
    ]);
    return {
      WeeGoTo,
      drawer,
      setDrawer,
      CurrentAuthStore,
      tc,
      ...icons,
      notifications,
    };
  },
});
</script>
