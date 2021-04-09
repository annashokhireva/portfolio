<template>
	<div class="dropdown">
		<ul>
			<li><router-link to="/my-projects"><h4>My Projects</h4> </router-link></li>
			<li><router-link to="/skills"> <h4>Skills</h4> </router-link></li>
			<li><router-link to="/contact"> <h4>Contact</h4> </router-link></li>
		</ul>
		
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
	.dropdown {
		width: 80vw;
		right: 0;
		top: 60px;
		background: rgba(255, 255, 255, 0.89);
		box-shadow: 0 7px 6px -6px rgba(44, 8, 75);
		position: absolute;
		z-index: -1;
		padding: 5vmin 5vmin 5vmin;
		text-align: right;
		font-size: 20px;
	}

	ul {
		list-style: none;

		li {
			margin: 20px 0;
		}

		a {
			text-decoration: none;
			color: black;
			

			&.router-link-exact-active {
				color: black;
			}
		}
	}
</style>