import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";

if (navigator.serviceWorker != null) {
  navigator.serviceWorker.register("sw.js").then(function (registration) {
    console.log("Registered events at scope: ", registration.scope);
  });
}

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

app.component("Dialog", Dialog);

app.mount("#app");
