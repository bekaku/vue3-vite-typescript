<template>
  <!-- <v-app :theme="theme"> -->
  <v-app>
    <app-bar></app-bar>
    <app-drawer></app-drawer>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <app-footer></app-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, defineAsyncComponent } from "vue";
export default defineComponent({
  components: {
    AppBar: defineAsyncComponent(() => import("@/components/core/AppBar.vue")),
    AppDrawer: defineAsyncComponent(
      () => import("@/components/core/AppDrawer.vue")
    ),
    AppFooter: defineAsyncComponent(
      () => import("@/components/core/AppFooter.vue")
    ),
  },
  setup() {
    const theme = ref("light");
    return {
      theme,
    };
  },
});
</script>
