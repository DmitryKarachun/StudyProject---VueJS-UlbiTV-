
import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/MainPage";
import UserPages from "@/pages/PostPage";
import AboutPage from "@/pages/AboutPage";

const routes = [
	{
		path: '/',
		component: Main
	},
	{
		path: '/posts',
		component: UserPages,
	},
	{
		path: '/about',
		component: AboutPage,
	}  
];

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL)
});

export default router;