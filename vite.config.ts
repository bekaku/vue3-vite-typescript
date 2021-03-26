import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
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
    vue(), // you need to install `@vitejs/plugin-vue`
    vueI18n({
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      // compositionOnly: false,

      // you need to set i18n resource including paths !
      include: path.resolve(__dirname, "./src/locales/**"),
    }),
  ],
});
// export default config;
