<template>
  <div id="nav">
    <router-link to="/home">Home</router-link> |
    <router-link to="/i18n/en?chageLocale=true">I18n</router-link> |
    <router-link :to="{ name: 'TypeTest' }">TypeTest</router-link> |
    <router-link to="/vuex">Vuex</router-link> |
    <router-link to="/userList">UserList</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
