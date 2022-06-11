import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

if (navigator.serviceWorker != null) {
  navigator.serviceWorker.register("sw.js").then(function (registration) {
    console.log("Registered events at scope: ", registration.scope);
  });
}

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount("#app");
