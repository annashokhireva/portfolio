<template>
<section class="main-section">
	<!-- <img class="my-picture" src="@/assets/img/MyPicture.jpg" width="300" alt="My Photo"> -->

		<div class="intro">
			<span class="inline">
				<p>Hi, my name is</p>
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

section {
	overflow: hidden;
	background: rgb(0, 21, 80);
	color: transparent;
}

h1, p {
	color: white;
}

.inline {
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 1.5em;

	h1 {
		margin-left: 14px;
	}
}

@mixin dots($count) {

	$text-shadow: ();
	
	@for $i from 0 through $count {
		$text-shadow: $text-shadow,
			(-.5+(random()) * 5) + em
			(-.5+(random()) * 3) + em
			7px
			hsla(random() * 360, 100%, 50%,.9);
	}
	text-shadow: $text-shadow;
}

section::before, section::after,
.intro::before, .intro::after {
	position: fixed;
	top: 50%;
	left: 50%;
	width: 3em;
	height: 3em;
	content: '.';
	mix-blend-mode: screen;
	animation: 44s -27s move infinite ease-in-out alternate;
	
}


section::before {
	@include dots(40);
	animation-duration: 44s;
	animation-delay: -27s;
}

section::after {
	@include dots(40);
	animation-duration: 43s;
	animation-delay: -32s;
}

.intro::before {
	@include dots(40);
	animation-duration: 42s;
	animation-delay: -23s;
}

.intro::after {
	@include dots(40);
	animation-duration: 41s;
	animation-delay: -19s;
}


@keyframes move {
	from {
		transform: rotate(0deg) scale(12) translateX(-20px);
	}
	to {
		transform: rotate(360deg) scale(18) translateX(20px);
	}
}

@media screen and (max-width: 600px) {
	.inline {
		display: block;
	}
}

</style>
