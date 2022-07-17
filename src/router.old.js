import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: () => import('./routes/Home.vue'),
		},
		{
			path: '/contact',
			component: () => import('./routes/Contact.vue'),
		},
		{
			path: '/:catchAll(.*)',
			component: () => import('./routes/404.vue'),
		},
	],
});

export {router};
