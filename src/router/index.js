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
		path: "/my_cv",
		name: "MyCV",
		component: () =>
			import("../views/MyCV.vue")
	}
];

const router = new VueRouter({
	routes
});

export default router;
