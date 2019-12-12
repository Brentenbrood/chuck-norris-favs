require('./bootstrap');
import { MdButton, MdContent, MdTabs, MdList, MdIcon, MdCard, MdCheckbox } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import '../sass/app.scss'
window.Vue = require('vue');
Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('Jokes', require('./components/Jokes.vue').default);

// Required to call every plugin seperately
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdList);
Vue.use(MdIcon);
Vue.use(MdCard);
Vue.use(MdCheckbox);

const app = new Vue({
    el: '#app',
});
