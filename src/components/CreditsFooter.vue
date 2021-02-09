<template>
	<footer>
		<div class="logo">AS</div>
		<a href="https://www.vecteezy.com/free-photos/flowers">Flowers Stock photos by Vecteezy</a>
	</footer>
	
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
	footer {
		height: 20vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-top: 1px solid rgb(85, 85, 85);
	}

	.logo{
		background-color: white;
		border-radius: 50%;
		border-top: 7px solid rgb(85, 85, 85);
		width: 100px;
		height: 100px;
		margin-top: -70px;
		margin-bottom: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: black;
		font-size: 40px;
	}
</style>