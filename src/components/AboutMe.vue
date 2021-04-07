<template>
<section class="main-section">
	<!-- <img class="my-picture" src="@/assets/img/MyPicture.jpg" width="300" alt="My Photo"> -->

		<div class="intro">
			<span class="inline">
				<p>Hello, my name is</p>
				<h1>Anna Shokhireva.</h1>
			</span>
			<p>I'm a front end developer in the making.</p>
		</div>
	
</section>
</template>

<script>

export default {
	components: { 
		// TicTacToe 
	},

};
</script>

<style lang="scss" scoped>

.inline {
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 1.5em;

	h1 {
		margin-left: 14px;
	}
}

// .my-picture {
// 	transform: rotate(3deg);
// 	box-shadow: 1px 1px 2px #686767;
// }


</style>
