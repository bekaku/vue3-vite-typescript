<template>
  <p>UserList</p>

  <template v-if="!isFristLoad">
    <p v-if="isLoading">Loading</p>
  </template>
  <template v-else-if="userList.length > 0">
    <template v-for="(item, index) in userList" :key="`user-list-${index}`">
      <div>
        <h2>{{ `${item.first_name} ${item.last_name}` }}</h2>
        <p>{{ item.email }}</p>
      </div>
    </template>
    <template v-if="!infinityLoad">
      <p>{{ tc("helper.nomoreData") }}</p>
    </template>
    <template v-else>
      <p>
        <button @click="loadData">Load more</button>
      </p>
    </template>
  </template>

  <button @click="WeeGoTo('/')">Back</button>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import useBase from "@/composables/useBase";
import MockService from "@/api/MockService";
import { ApiResponse } from "@/interface/Common";
import { User } from "@/interface/MockTypes";
import useLocale from "@/composables/useLocale";

export default defineComponent({
  components: {},
  setup() {
    const { tc } = useLocale();
    const { WeeGoTo } = useBase();
    const mockService = new MockService();
    const page = ref<number>(1);
    const userList = ref<User[]>([]);
    // const { WeeLoading } = useBase();
    const isLoading = ref(false);
    const isFristLoad = ref(false);
    const infinityLoad = ref(true);
    onMounted(() => {
      fetchData();
    });

    const fetchData = async () => {
      isLoading.value = true;
      const res: ApiResponse = await mockService.getUserAll(page.value);
      isLoading.value = false;
      console.log("getUserAll", res);

      const { data } = res.response;
      if (!isFristLoad.value) {
        isFristLoad.value = true;
      }
      if (data && data.length > 0) {
        userList.value = userList.value?.concat(data);
      } else {
        infinityLoad.value = false;
      }
      return new Promise((resove) => {
        resove(true);
      });
    };
    const loadData = async () => {
      if (infinityLoad.value) {
        page.value++;
        await fetchData();
      }
    };
    return {
      WeeGoTo,
      userList,
      isLoading,
      isFristLoad,
      infinityLoad,
      loadData,
      tc,
    };
  },
});
</script>
