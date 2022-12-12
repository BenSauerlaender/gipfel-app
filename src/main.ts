import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import de from "element-plus/es/locale/lang/de";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

if (navigator.serviceWorker != null) {
  navigator.serviceWorker.register("sw.js").then(function (registration) {
    console.log("Registered events at scope: ", registration.scope);
  });
}

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(createPinia());
app.use(router);
app.use(ElementPlus, {
  locale: de,
});

app.mount("#app");
