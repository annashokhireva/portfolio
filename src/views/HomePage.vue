<template>
	<div class="home">
	
		<HelloWorld msg="Hello, My name is Anna" />

		<skills-footer />

	</div>
</template>

<script>
	import HelloWorld from "@/components/HelloWorld.vue";
	import SkillsFooter from '../components/SkillsFooter.vue';

	export default {
		name: "HomePage",
		components: {
			HelloWorld,
			SkillsFooter
		}
	};
</script>

<style lang="scss" scoped>

	.home {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 80%;
	}

</style>
