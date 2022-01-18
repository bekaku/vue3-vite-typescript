<template>
  <!-- <v-container fluid>
    <v-row>
      <v-col cols="12">
        CurrentAuthStore
        
      </v-col>
      <v-col cols="12">
        Icons
        <p>
          icon
          <v-icon :icon="mdiAccount" color="green-lighten-2" class="mr-5" />
          <v-icon :icon="mdiAccountCheckOutline" />
        </p>
      </v-col>
      <v-col cols="12">
        Button
        <v-btn color="primary" dark flat> Normal </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="pa-2"  tile> One of three columns </v-card>
      </v-col>
    </v-row>
  </v-container> -->
  <div>Hello world</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import useAuth from "@/composables/useAuth";
import { mdiAccount, mdiAccountCheckOutline } from "@mdi/js";
export default defineComponent({
  components: {},
  setup() {
    const { CurrentAuthStore } = useAuth();
    onMounted(() => {});
    const icons = {
      mdiAccount,
      mdiAccountCheckOutline,
    };
    return {
      CurrentAuthStore,
      ...icons,
    };
  },
});
</script>
