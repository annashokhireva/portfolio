<template>
	<svg width="38" height="6" viewBox="0 0 38 6" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5V0.5ZM35.5 5.5C36.8807 5.5 38 4.38071 38 3C38 1.61929 36.8807 0.5 35.5 0.5V5.5ZM2.5 5.5H35.5V0.5H2.5V5.5Z" fill="black"/>
	</svg>

</template>

<script>
	export default {
		props: {
			width: {
				type: [Number, String],
				default: "100%"
			},
			height: {
				type: [Number, String],
				default: "100%"
			},
			long: {
				type: Boolean,
				default: true
			}
		}	
	}	
</script>

<style>

</style>