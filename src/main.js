// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//路由
import router from './router'
//vuex
import store from './store'
//iView
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

//交互 axios
import axios from 'axios'

//配置post参数
import qs from 'qs';
Vue.config.productionTip = false;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//路由跳转
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
	if(config.method == 'post'){
		config.data=qs.stringify(config.data);
	}
	return config;
}, function (error) {
	return Promise.reject(error);
});
axios.interceptors.response.use(function (response) { //配置请求回来的信息
	return response.data;
}, function (error) {
	return Promise.reject(error);
});
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
