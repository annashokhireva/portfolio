<template>
	<header>
		<router-link to="/">About Me</router-link> |
		<router-link to="/my_projects">My Projects</router-link>
	</header>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
	header {
		padding: 30px;
		position: sticky;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
			color: $green;
			}
		}
	}
</style>