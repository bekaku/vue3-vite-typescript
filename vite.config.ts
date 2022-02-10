import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
// module.exports = {
//   alias: {
//     "/@/": path.resolve(__dirname, "./src"),
//     // "/@utils/*": ["src/utils/*"],
//   },
// };

// const config: UserConfig = {
//   plugins: [
//     pluginI18n({
//       include: path.resolve(__dirname, "./src/locales/**"),
//     }),
//   ],
// };
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }), // you need to install `@vitejs/plugin-vue`
    vueI18n({
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      // compositionOnly: false,

      // you need to set i18n resource including paths !
      include: path.resolve(__dirname, "./src/locales/**"),
    }),
    quasar({
      sassVariables: "src/quasar-variables.sass",
    }),
  ],
});
// export default config;
