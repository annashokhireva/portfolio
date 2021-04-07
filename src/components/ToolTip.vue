<template>
	<div class="tooltip">
		<span class="tooltiptext">{{text}}</span>
	</div>
</template>

<script>
export default {
	props: {
		text: String
	}
}
</script>

<style lang="scss" scoped>

	.tooltip {
		position: relative;
		display: inline-block;
		border-bottom: 1px dotted black;
	}

	.tooltip .tooltiptext {
		width: 120px;
		background-color: black;
		color: #fff;
		text-align: center;
		border-radius: 6px;
		padding: 5px 0;
		position: absolute;
		z-index: 1;
		top: 100%;
		left: 50%;
		margin-left: -60px;
	}



</style>