<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.35,8.35l-8,8a.48.48,0,0,1-.7,0l-8-8a.49.49,0,0,1,.7-.7L12,15.29l7.65-7.64a.49.49,0,1,1,.7.7Z" data-name="single down-sign"/></svg>
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

<style lang="scss" scoped>
	svg {
		fill: rgb(255, 255, 255);
	}
</style>