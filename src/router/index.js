import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "HomePage",
		component: HomePage
	},
	{
		path: "/my-projects",
		name: "myProjects",
		component: () =>
			import("../views/MyProjects.vue")
	},
	{
		path: "/skills",
		name: "MySkills",
		component: () =>
			import("../views/MySkills.vue")
	},
	{
		path: "/contact",
		name: "Contact",
		component: () =>
			import("../views/MyContact.vue")
	}
];

const router = new VueRouter({
	routes
});

export default router;
