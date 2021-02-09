<template>
	<section class="main-section">
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
		// background-image: url('../assets/img/FlowerDesk.jpg');
		// background-size: cover;
		// background-position-x: left;
		// background-repeat: no-repeat;
	}

</style>
