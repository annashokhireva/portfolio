<template>
	<section >
		<h1>{{ msg }}</h1>
	</section>
</template>

<script>
	export default {
		props: {
			msg: String
		}
	};
</script>

<style scoped lang="scss">

	section {
		height: 100vh;
	}

</style>
