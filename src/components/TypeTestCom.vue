<template>
  <hr class="my-5" />
  <div class="type-test">
    <p>
      <button @click="$emit('on-submit', 'from component btn')">
        emit to parent
      </button>
    </p>
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
import { User } from "@/types/User";
import { ComplexMessage } from "@/types/Common";
// type UserList = User;
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
  setup(props, context) {
    console.log("props", props, "context", context);

    const count = ref<number>(0);
    const currentUser: User = reactive({
      id: 4,
      userName: "bekaku",
      fullName: "Chanavee Bekaku",
      created_at : "2021-09-09"
    });

    const userNameList = ref<User[]>([
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
      console.log("addUser");
      if (user) {
        const now = new Date();
        user.created_at = now.toString();

        console.log("addUser", now, user);
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
