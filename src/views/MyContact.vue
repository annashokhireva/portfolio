<template>
	<div>
		<about-me />
	</div>
</template>

<script>
	import AboutMe from '../components/AboutMe.vue';

	export default {
		components: { AboutMe },

	}
</script>

<style lang="scss" scoped>

	div {
		height: 100vh;
		padding-top: 3vmin;
		background: radial-gradient(farthest-side at bottom left, rgb(255, 255, 255) 10%, rgb(230, 239, 241) 80%, transparent),
					radial-gradient(farthest-corner at top right, rgb(221, 213, 213) 0%, rgb(255, 255, 255) 80%, transparent 400px);
		background-size: 150% 150%;
		animation: gradient 15s ease infinite;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}

		20% {
			background-position: 100% 100%;
		}

		50% {
			background-position: 100% 50%;
		}

		70% {
			background-position: 50% 0%;
		}

		100% {
			background-position: 0% 50%;
		}
	}

</style>