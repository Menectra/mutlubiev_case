import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VueRouter from "vue-router";
import routes from "./routes";
import firebase from "firebase";

Vue.use(VueRouter);

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyDrtygnBhqC7FkeYlS963YktXXPZiX6_ws",
  authDomain: "vue-mutlubiev.firebaseapp.com",
  databaseURL: "https://vue-mutlubiev.firebaseio.com",
  projectId: "vue-mutlubiev",
  storageBucket: "vue-mutlubiev.appspot.com",
  messagingSenderId: "573439496557",
  appId: "1:573439496557:web:89daf35a43ed8e002e0a64",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router: routes,
  render: (h) => h(App),
}).$mount("#app");
