<template>
	<main>
		<!-- <about-me /> -->
		<my-projects/>

	</main>
</template>

<script>
	import MyProjects from '../components/MyProjects.vue';
	// import AboutMe from '../components/AboutMe.vue';

	export default {
		name: "HomePage",
		components: {
			MyProjects,
			// AboutMe
		}
	};
</script>

<style lang="scss" scoped>

	main {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		// background-image: url('../assets/img/FlowerDesk.jpg');
		// background-size: cover;
		// background-repeat: no-repeat;
	}

</style>
