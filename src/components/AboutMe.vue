<template>
	<div class="card">
		<img src="../assets/img/picture.png" width="300px" alt="Photo of me">
		<h2>Anna Shokhireva</h2>
		<h5>Front end developer</h5>
		<br>
		<p>annashokhireva@gmail.com</p>
		<p>+46 76-277 92 71</p>
		<span class="social">
			<a href="https://www.facebook.com/anna.shokhireva" target="_blank">
				<img src="../assets/icons/facebook.svg" width="44px" alt="Facebook">
			</a>
			<a href="https://www.linkedin.com/in/annashokhireva/" target="_blank">
				<img src="../assets/icons/linkedin.svg" width="44px" alt="LinkedIn">
			</a>
			<a href="https://github.com/annashokhireva" target="_blank">
				<img src="../assets/icons/github.svg" width="46px" alt="GitHub">
			</a>	
		</span>
	</div>
</template>

<script>

	export default {
		

	}
</script>

<style lang="scss" scoped>

	.card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 50px;

		img {
			margin: 3% 0;
		}
	}

	h2, h5, p {
		font-family: 'Lato', sans-serif;
		color: black;
		line-height: 1.5em;
	}

	p {
		font-size: 16px;
	}

	h5 {
		text-transform: uppercase;
	}

	.social {
		width: 200px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

</style>