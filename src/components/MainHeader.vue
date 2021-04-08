<template>
	<header>
		<router-link to="/">About Me</router-link> |
		<router-link to="/my_cv">Resume</router-link>
	</header>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
	header {
		padding: 3vmin 2vmin;	
		position: fixed;
		width: 100vw;
		background: linear-gradient(rgba(255, 255, 255, 0.568)80%, rgba(255, 255, 255, 0));
		opacity: 85%;
		z-index: 2;

		a {
			font-weight: bold;
			color: white;
			text-decoration: none;

			&.router-link-exact-active {
			color: rgb(255, 255, 255);
			}
		}
	}
</style>