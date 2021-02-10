<template>
	<main>
		<about-me msg="Hello, My name is Anna" />
		<img class="my-picture" src="@/assets/img/MyPicture.jpg" width="200" alt="My Photo">

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
	}

	.my-picture {
		transform: rotate(7deg);
		box-shadow: 1px 1px 2px #686767;
		position: absolute;
		left: 50%;
		top: 15%;
	}

</style>
