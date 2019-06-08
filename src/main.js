import Vue from 'vue';
import { firestorePlugin } from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';
import App from './App';

Vue.config.productionTip = false;
Vue.use(firestorePlugin);

firebase.initializeApp({
  projectId: 'playground-163f3',
  databaseURL: 'https://playground-163f3.firebaseio.com/'
});

export const fireDB = firebase.firestore();

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
