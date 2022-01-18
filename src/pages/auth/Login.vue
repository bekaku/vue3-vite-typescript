<template>
  <div>
        <button @click="signin"> Signin </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useAuth from "@/composables/useAuth";
import { UserCredential } from "@/interface/Common";
import useBase from "@/composables/useBase";
export default defineComponent({
  components: {},
  setup() {
    const { SetAuth, CurrentAuth } = useAuth();

    const user = ref<UserCredential | null>();
    const { WeeGoTo } = useBase();
    user.value = CurrentAuth();

    console.log("AuthUser > ", user.value);
    

    const signin = () => {
      SetAuth({
        id: 1,
        username: "chanavee",
        email: "chanavee@gmail.com",
        status: true,
        rolesText: "Dev-Vee",
        picture: {
          path: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          x: "https://ionicframework.com/docs/demos/api/list/avatar-luke.png",
          xx: "https://ionicframework.com/docs/demos/api/list/avatar-luke.png",
          xxx: "https://ionicframework.com/docs/demos/api/list/avatar-luke.png",
        },
        userRoles: ["1"],
        apiKey:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjEsImtleSI6IjNiZDQ3Mzk0LWFkMTEtNTJhOC1iZmM0LWM4ZDkzYzk4MTY5NCIsImlhdCI6MTYxNjY2NDAyMywiZXhwIjoxNjE5MjU2MDIzfQ.2xxupPXG8XdZv_C6p8mht6-wKW5xOK5ufzJqtGd389c",
      });

      setTimeout(() => {
        WeeGoTo("/home", true);
      }, 500);
    };
    return {
      SetAuth,
      signin,
      user,
    };
  },
});
</script>
