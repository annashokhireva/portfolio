<template>
	<div id="app">
		
		<main-header/>
		<router-view/>
	</div>
</template>

<script>
	import MainHeader from './components/MainHeader';

	export default {
		components: {
			MainHeader
		}

	}
</script>
<style lang="scss">
	@import './sass';

</style>
