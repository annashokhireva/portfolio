<template>
	<footer>
		<div class="logo">AS</div>
		<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique aspernatur odio debitis quisquam, voluptas porro explicabo impedit laborum quo ullam aperiam. Labore eligendi neque quaerat mollitia ex saepe eveniet veniam?</p>
	</footer>
	
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
	footer {
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