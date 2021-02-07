import Vue from "vue";
import VueRouter from "vue-router";
import HomePAge from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "HomePage",
		component: HomePAge
	},
	{
		path: "/my_projects",
		name: "MyProjects",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/MyProjects.vue")
	}
];

const router = new VueRouter({
	routes
});

export default router;
