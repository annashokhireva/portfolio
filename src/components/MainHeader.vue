<template>
	<header>
		<div class="long">
			<router-link to ="/"> <img src="../assets/icons/logo.svg" width="44px" alt="AS"> </router-link>
			<div class="links">
				<router-link to="/my-projects"><h4>My Projects</h4> </router-link>
				<router-link to="/skills"> <h4>Skills</h4> </router-link>
				<router-link to="/contact"> <h4>Contact</h4> </router-link>
			</div>
			
		</div>
		
		<div class="mobile">
			<router-link to ="/"> <img src="../assets/icons/logo.svg" width="44px" alt="AS"> </router-link>

			<div class="menu" @click="toggleDropdown">
				<menu-line :class="{top : dropdownOpen }"/>
				<menu-line :class="{bottom : dropdownOpen }"/>
				<div v-if="dropdownOpen">
					<drop-down-menu />
				</div>
			</div>
		</div>
		
		
	</header>
</template>

<script>
	import MenuLine from '../assets/icons/MenuLine.vue';
	import DropDownMenu from './DropDownMenu.vue';

	export default {
		components: {
			MenuLine,
			DropDownMenu
		},

		data() {
			return {
				dropdownOpen: false
			}
		},

		methods: {
			toggleDropdown() {
				this.dropdownOpen = !this.dropdownOpen;
			}
		}

	}
</script>

<style scoped lang="scss">
	.long {
		padding: 1vmin 10vmin;	
		position: fixed;
		width: 100vw;
		background: rgba(255, 255, 255, 0.89);
		box-shadow: 0 7px 6px -6px rgba(44, 8, 75);
		z-index: 2;
		height: 70px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		a {
			font-weight: bold;
			color: black;
			text-decoration: none;

			&.router-link-exact-active {
				color: black;
				text-decoration: underline;
			}
		}
	}

	.links {
		width: fit-content;
		display: flex;
		justify-content: flex-end;
		align-items: center;

		h4 {
			margin: 0 20px;
		}
	}

	.mobile	{
		display: none;
	}

	@media screen and (max-width: 600px) {
		.long {
			display: none;
		}

		.mobile {
			display: flex;
			justify-content: space-between;
			padding: 1vmin 4vmin;
			width: 100vw;
			position: fixed;
			background: rgba(255, 255, 255, 0.89);
			box-shadow: 0 7px 6px -6px rgba(44, 8, 75);
			z-index: 2;
		}

		.menu {
			
			display: flex;
			flex-direction: column;
			justify-content: center;
			cursor: pointer;

			svg {
				margin: 0.2em;
			}
		}

		.top {
			-webkit-transform: rotate(-45deg) translate(-5px, 6px);
			transform: rotate(-45deg) translate(-4px, 4px);
		}

		.bottom {
			-webkit-transform: rotate(45deg) translate(-5px, -6px);
			transform: rotate(45deg) translate(-4px, -6px);
		}
	}
</style>