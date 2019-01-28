import Vue from 'vue';
import App from './App.vue';
import iView from 'iview'
import locale from 'iview/dist/locale/zh-CN';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false;
Vue.use(iView, {
    transfer: true,
    size: 'large',
    locale
})
router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
});

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
