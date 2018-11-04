import Vue    from 'vue';
import Router from 'vue-router';
import Nav    from './views/Nav.vue';

const Home = () => import('./views/Home.vue');
const List = () => import('./views/List.vue');
const My = () => import('./views/My.vue');

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Nav,
            children: [
                {
                    path: '/',
                    redirect () {
                        return 'home';
                    }
                },
                {
                    path: '/home',
                    name: 'home',

                    component: Home
                },
                {
                    path: '/list',
                    name: 'list',
                    component: List
                },
                {
                    path: '/my',
                    name: 'my',
                    component: My
                },
            ]
        },
    ]
});
