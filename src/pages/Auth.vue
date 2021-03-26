<template>
  <div>
    <h1>Auth</h1>
    <p>
      {{ user ? user.email : "" }}
    </p>
    <p><button @click="signin">Signin</button></p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useAuth } from "@/composables/useAuth";
import { Auth } from "@/types/Auth";
export default defineComponent({
  components: {},
  setup() {
    const { SetAuth, CurrentAuth } = useAuth();

    const user = ref<Auth | null>();

    user.value = CurrentAuth();

    console.log("AuthUser > ", user.value);

    const signin = () => {
      SetAuth({
        id: 1,
        username: "chanavee",
        email: "baekaku@gmail.com",
        status: true,
        rolesText: "Dev-Vee",
        picture: {
          path:
            "http://localhost/outsource/sdpy-hospital-api/data/img/default.jpg",
          x:
            "http://localhost/outsource/sdpy-hospital-api/data/img/default_x.jpg",
          xx:
            "http://localhost/outsource/sdpy-hospital-api/data/img/default_xx.jpg",
          xxx:
            "http://localhost/outsource/sdpy-hospital-api/data/img/default_xxx.jpg",
        },
        userRoles: ["1"],
        apiKey:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjEsImtleSI6IjNiZDQ3Mzk0LWFkMTEtNTJhOC1iZmM0LWM4ZDkzYzk4MTY5NCIsImlhdCI6MTYxNjY2NDAyMywiZXhwIjoxNjE5MjU2MDIzfQ.2xxupPXG8XdZv_C6p8mht6-wKW5xOK5ufzJqtGd389c",
      });
    };
    return {
      SetAuth,
      signin,
      user,
    };
  },
});
</script>
