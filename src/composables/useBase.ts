import { useRouter, useRoute } from "vue-router";
import useLocale from "@/composables/useLocale";
import { useQuasar } from "quasar";
import {
  mdiInformation,
  mdiCheckCircle,
  mdiAlert,
  mdiAlertCircle,
} from "@quasar/extras/mdi-v6";
export default () => {
  const $q = useQuasar();
  const route = useRoute();
  const router = useRouter();
  const { tc } = useLocale();
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
  const WeeLoaderClose = () => {
    if ($q.loading.isActive) {
      $q.loading.hide();
    }
  };
  const WeeLoader = (open = true, message = undefined, delay = 0): void => {
    if (open) {
      WeeLoaderClose();
      $q.loading.show({
        delay: delay, // ms
        message: message === undefined ? tc("base.pleaseWait") : message,
      });
    } else {
      WeeLoaderClose();
    }
  };
  /* https://quasar.dev/quasar-plugins/notify
        position > top-left top-right bottom-left bottom-right top bottom left right center
    WeeToast('Quasar Framework Template',{type:'positive', position:'right', color:''});
    WeeToast('Quasar Framework Template',{caption:'5 Minutes ago', avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'});
     */
  const WeeToast = (message: any, options: any) => {
    if (!message) {
      return;
    }
    let icon = undefined;
    if (options && options.type) {
      const t = options.type;
      if (t === "positive") {
        icon = mdiCheckCircle;
      } else if (t === "negative") {
        icon = mdiAlert;
      } else if (t === "warning") {
        icon = mdiAlertCircle;
      } else if (t === "info") {
        icon = mdiInformation;
      }
    }
    $q.notify(
      Object.assign({ message, icon, timeout: 5000, progress: true }, options)
    );
  };
  const WeeConfirm = async (
    title: string,
    text: string,
    okBtn = {},
    cancelBtn = {}
  ) => {
    return new Promise((resolve) => {
      $q.dialog({
        title: title,
        message: text,
        ok: Object.assign(
          { textColor: "primary", flat: true, label: tc("okay") },
          okBtn
        ),
        // ok: okText===undefined ? tc('okay') : okText,
        cancel: Object.assign(
          { textColor: "grey", flat: true, label: tc("cancel") },
          cancelBtn
        ),
        persistent: true,
      })
        .onOk(() => {
          // console.log('>>>> OK')
          resolve(true);
        })
        .onOk(() => {
          // console.log('>>>> second OK catcher')
          resolve(true);
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
          resolve(false);
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
          resolve(false);
        });
    });
  };
  const WeeManageResponseStatus = (response: any) => {
    if (response && response.message) {
      WeeToast(response && response.message, {
        type: response && response.status ? "positive" : "negative",
        position: "right",
      });
    }
  };
  return {
    WeeGetParam,
    WeeGetQuery,
    WeeGoTo,
    WeeLoader,
    WeeToast,
    WeeConfirm,
    WeeManageResponseStatus,
  };
};
