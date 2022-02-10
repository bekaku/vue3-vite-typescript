<template>
  <q-layout view="lHh Lpr fff">
    <q-page class="window-height row justify-center items-center wee-bg-main">
      <div class="column q-pa-lg">
        <div class="row">
          <q-card square class="shadow-24" style="width: 400px; height: 540px">
            <q-card-section class="bg-primary">
              <h4 class="text-h5 text-white q-my-md">
                {{ tc("app.fullName") }}
              </h4>
              <span class="text-caption text-white"
                >Signin to your account</span
              >
            </q-card-section>
            <q-form @submit="onSubmit" class="q-px-sm q-pt-xl">
              <q-fab
                @click="switchTypeForm"
                color="pink"
                :icon="mdiPlus"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%)"
              >
                <q-tooltip>XXXXx</q-tooltip>
              </q-fab>
              <q-card-section>
                <q-input
                  square
                  clearable
                  v-model="email"
                  lazy-rules
                  :rules="[required, isEmail, short]"
                  label="Email"
                >
                  <template v-slot:prepend>
                    <q-icon :name="mdiEmailOutline" />
                  </template>
                </q-input>
                <q-input
                  square
                  clearable
                  v-model="password"
                  :type="visibility ? 'text' : 'password'"
                  lazy-rules
                  :rules="[required, short]"
                  label="Password"
                >
                  <template v-slot:prepend>
                    <q-icon :name="mdiLockOutline" />
                  </template>
                  <template v-slot:append>
                    <q-icon
                      :name="!visibility ? mdiEyeOffOutline : mdiEyeOutline"
                      @click="visibility = !visibility"
                      class="cursor-pointer"
                    />
                  </template>
                </q-input>
              </q-card-section>

              <q-card-actions class="q-px-lg">
                <q-btn
                  unelevated
                  size="lg"
                  color="positive"
                  class="full-width text-white"
                  :label="btnLabel"
                  type="submit"
                />
              </q-card-actions>
            </q-form>
            <q-card-section v-if="!register" class="text-center q-pa-sm">
              <p class="text-grey-6">New user ?</p>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <q-btn @click="showLoading" label="Show loading" />
          <q-btn @click="showToast" label="Show toast" />
          <q-btn @click="showConfirm" label="Show confirm" />
        </div>
      </div>

    </q-page>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useAuth from "@/composables/useAuth";
import { UserCredential } from "@/interface/Common";
import useBase from "@/composables/useBase";
import useLocale from "@/composables/useLocale";
import {
  mdiLogin,
  mdiPlus,
  mdiEmailOutline,
  mdiLockOutline,
  mdiEyeOffOutline,
  mdiEyeOutline,
  mdiAirballoonOutline,
} from "@quasar/extras/mdi-v6";
export default defineComponent({
  components: {},
  setup() {
    const { SetAuth, CurrentAuth } = useAuth();
    const { tc } = useLocale();
    const user = ref<UserCredential | null>();
    const { WeeGoTo, WeeLoader, WeeToast, WeeConfirm } = useBase();
    user.value = CurrentAuth();
    const title = ref<String>("Title");
    const email = ref("");
    const username = ref<String>("");
    const password = ref("");
    const repassword = ref("");
    const register = ref(false);
    const passwordFieldType = ref("password");
    const btnLabel = ref("Submit");
    const visibility = ref(false);
    const visibilityIcon = ref("visibility");

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

    const switchTypeForm = () => {
      register.value = !register.value;
      title.value = register.value ? "Register" : "Login";
      btnLabel.value = register.value ? "Register" : "Login";
    };
    const required = (val: any) => {
      return (val && val.length > 0) || "Required filed";
    };
    const short = (val: any) => {
      return (val && val.length > 3) || "Short passeord";
    };
    const isEmail = (val: any) => {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Email valid";
    };
    const onSubmit = () => {
      console.log("onSubmit");
    };
    const showLoading = () => {
      WeeLoader(true);
      setTimeout(() => {
        WeeLoader(false);
      }, 3000);
    };
    const showToast = () => {
      WeeToast("Test toast", { type: "info", position: "right" });
    };
    const showConfirm = async () => {
      const conf = await WeeConfirm("title", "message");
      console.log("showConfirm " + conf);
    };



    const icons = {
      mdiLogin,
      mdiPlus,
      mdiEmailOutline,
      mdiLockOutline,
      mdiEyeOffOutline,
      mdiEyeOutline,
      mdiAirballoonOutline,
    };
    const methods = {
      switchTypeForm,
      required,
      short,
      isEmail,
      onSubmit,
      showLoading,
      showToast,
      showConfirm,
    };
    const entityData = {
      title,
      username,
      repassword,
      password,
      register,
      passwordFieldType,
      btnLabel,
      visibility,
      visibilityIcon,
    };

    return {
      ...icons,
      ...methods,
      ...entityData,
      SetAuth,
      signin,
      user,
      tc,
      email,
    };
  },
});
</script>
