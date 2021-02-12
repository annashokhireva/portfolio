<template>
	<main>
		<about-me />
		<my-skills/>

	</main>
</template>

<script>
	import MySkills from '../components/MySkills.vue';
	import AboutMe from '../components/AboutMe.vue';

	export default {
		name: "HomePage",
		components: {
			MySkills,
			AboutMe
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
