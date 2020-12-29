<template>
  <hr class="my-5" />
  <div class="type-test">
    <h1>{{ msg }}</h1>
    <p>Message Interface props :{{ message }}</p>
    <p>userNameList</p>
    <ul>
      <li v-for="item in userNameList" :key="item.id">
        {{ item }}
      </li>
    </ul>

    <button
      class="py-2 px-4 rounded bg-green-500 hover:bg-green-400 text-white transition duration-200 ease-out"
      @click="addUser()"
    >
      addUser
    </button>
    <button
      class="py-2 px-4 rounded bg-red-500 hover:bg-green-400 text-white transition duration-200 ease-out"
      @click="increase"
    >
      count is: {{ count }}
    </button>
    <p>
      Edit <code>components/HelloWorld.vue</code> to test hot module
      replacement.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, onMounted, reactive } from "vue";
// import { User } from '/@/model/User.ts'
interface ComplexMessage {
  title: string;
  okMessage: string;
  cancelMessage: string;
}
interface User {
  id: number;
  userName: string;
  fullName?: string;
}
type UserList = User;

export default defineComponent({
  name: "TypeTest",
  inheritAttrs: false,
  props: {
    msg: {
      type: String,
    },
    message: {
      type: Object as PropType<ComplexMessage>,
      required: true,
      validator(message: ComplexMessage) {
        return !!message.title;
      },
    },
  },
  setup() {
    const count = ref<number>(0);
    const currentUser: User = reactive({
      id: 4,
      userName: "bekaku",
      fullName: "Chanavee Bekaku",
    });

    const userNameList = ref<UserList[]>([
      { id: 1, userName: "hoge" },
      { id: 2, userName: "fuga" },
      { id: 3, userName: "poco" },
    ]);

    onMounted(() => {
      console.log("mounted!");
    });

    const increase = (): void => {
      count.value = count.value + 1;
    };

    const addUser = (user?: User) => {
      if (user) {
        userNameList.value.push(user);
      } else {
        userNameList.value.push(currentUser);
      }
    };

    const state = {
      userNameList,
      count,
    };
    const methods = {
      increase,
      addUser,
    };

    return {
      ...state,
      ...methods,
    };
  },
});
</script>
