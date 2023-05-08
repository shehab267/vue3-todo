import { createApp } from "vue";
import "./style/main.css";
// import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/dark/css-vars.css";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";
import BaseSpinner from "./components/ui/BaseSpinner.vue";
import BaseDialog from "./components/ui/BaseDialog.vue";

const app = createApp(App);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);

app.use(store);
app.use(router);
app.use(ElementPlus);

app.mount("#app");
