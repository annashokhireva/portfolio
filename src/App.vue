<template>
	<div id="app">
		<div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/my_projects">My Projects</router-link>
		</div>
		<router-view />
	</div>
</template>

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

	#nav {
		padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
		color: $green;
		}
	}
}
</style>
