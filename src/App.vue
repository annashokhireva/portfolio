<template>
	<div id="app">
		<main-header />
		<router-view />
		<!-- <credits-footer /> -->
	</div>
</template>

<script>
	import MainHeader from './components/MainHeader';
	// import CreditsFooter from './components/CreditsFooter.vue';


	export default {
		components: {
			MainHeader,
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
	}
	

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
