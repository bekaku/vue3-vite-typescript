import { useRouter, useRoute } from "vue-router";
export default () => {
  const route = useRoute();
  const router = useRouter();
  //   console.log("HelloI18n > route Params", route.params, route.query); // fullPath ,  hash, meta, params, path, query, redirectedFrom
  const WeeGetParam = (field: string): any => {
    if (!field) {
      return;
    }
    return route.params ? route.params[field] : null;
  };
  const WeeGetQuery = (field: string): any => {
    if (!field) {
      return;
    }
    return route.query ? route.query[field] : null;
  };
  const WeeGoTo = (link: string, replace?: boolean): void => {
    if (!link) {
      return;
    }
    if (!replace) {
      router.push(link);
    } else {
      // window.location.replace(link);
      router.replace({ path: link });
    }
  };

  return {
    WeeGetParam,
    WeeGetQuery,
    WeeGoTo,
  };
};
