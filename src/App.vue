<template>
	<div id="app">
		<main-header />
		<router-view />
	</div>
</template>

<script>
	import MainHeader from './components/MainHeader'

	export default {
		components: {
			MainHeader
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
		background-image: url('./assets/img/Cactus.png');
		background-size: cover;
		background-position-x: right;
		background-repeat: no-repeat;
		padding-right: 30%;
	}
</style>
