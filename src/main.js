import { createApp } from "vue";
import App from "./App.vue";

import VueMultiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.css";

import "./assets/main.css";

const app = createApp(App);

app.component("VueMultiselect", VueMultiselect);

app.mount("#app");
