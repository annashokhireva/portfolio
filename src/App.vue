<template>
	<div id="app">
		<about-me />
		<main-header />
		<router-view />
		
		<!-- <credits-footer /> -->
	</div>
</template>

<script>
import AboutMe from './components/AboutMe.vue';
	import MainHeader from './components/MainHeader';
	// import CreditsFooter from './components/CreditsFooter.vue';


	export default {
		components: {
			MainHeader,
			AboutMe,
			// CreditsFooter,
		}

	}
</script>
<style lang="scss">
	@import './sass';

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		background: rgb(250, 249, 249);
		height: 100vh;
		overflow: scroll;
		width: 100vw;
	}

	
	
	// #app{
	// 	background: radial-gradient(farthest-side at bottom left, rgb(211, 139, 31) 10%, rgb(255, 73, 97) 80%, transparent),
	// 				radial-gradient(farthest-corner at top right, rgb(106, 8, 136) 0%, rgb(60, 252, 236) 80%, transparent 400px),
	// 				radial-gradient(farthest-corner at center,  rgb(198, 211, 19) 30%, rgb(96, 241, 0) 50%, transparent 700px);
	// 	background-size: 400% 400%;
	// 	animation: gradient 15s ease infinite;
	// }

	// @keyframes gradient {
	// 	0% {
	// 		background-position: 0% 50%;
	// 	}

	// 	20% {
	// 		background-position: 100% 100%;
	// 	}

	// 	50% {
	// 		background-position: 100% 50%;
	// 	}

	// 	70% {
	// 		background-position: 50% 0%;
	// 	}

	// 	100% {
	// 		background-position: 0% 50%;
	// 	}
	// }


	// @media only screen and (max-width: 1290px) {
	// 	#app {
	//		background-image: url('./assets/img/Mac.png');
	//		background-size: cover;
	//		background-position-x: center;
	//		background-repeat: no-repeat;
	// 	}
	// }

	// @media only screen and (max-width: 900px) {
	// 	#app {
	//		background-image: url('./assets/img/iPhone.png');
	//		background-size: cover;
	//		background-position-x: 70%;			
	//		background-repeat: no-repeat;
	// 	}
	// }
</style>
