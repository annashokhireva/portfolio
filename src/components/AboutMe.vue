<template>
<section class="main-section">
	<!-- <img class="my-picture" src="@/assets/img/MyPicture.jpg" width="300" alt="My Photo"> -->

	<div class="intro">
		<span class="inline">
			<p>Hello, my name is</p>
			<h1>Anna Shokhireva.</h1>
		</span>
		<p>I'm a <b>front end developer </b> in the making.</p>	
	</div>

	<div class="scroll">
		<h3>Scroll down for some projects</h3>
		<div class="down">
			<down-arrow class="icon"/>
			<down-arrow class="icon"/>		
		</div>
		
	</div>
	
	
</section>
</template>

<script>
import DownArrow from '../assets/icons/DownArrow.vue';

export default {
	components: {
	DownArrow 
		// TicTacToe 
	},

};
</script>

<style lang="scss" scoped>

section {
	overflow: hidden;
	// background: rgb(0, 21, 80);
	color: transparent;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	background: radial-gradient(farthest-side at bottom left, rgb(211, 139, 31) 10%, rgb(255, 73, 97) 80%, transparent),
				radial-gradient(farthest-corner at top right, rgb(106, 8, 136) 0%, rgb(60, 252, 236) 80%, transparent 400px),
				radial-gradient(farthest-corner at center,  rgb(198, 211, 19) 30%, rgb(96, 241, 0) 50%, transparent 700px);
	background-size: 150% 150%;
	animation: gradient 15s ease infinite;
}

h1, h3, p {
	color: white;
}

p {
	font-size: 20px;
}

.inline {
	display: flex;
	align-items: center;
	justify-content: center;

	h1 {
		margin-left: 14px;
	}

}

.scroll {
	margin: 15% 0 5%;

	h3 {
		margin-bottom: 5%;
	}

	.down {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.icon {
		margin: -5%;
	}
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}

	20% {
		background-position: 100% 100%;
	}

	50% {
		background-position: 100% 50%;
	}

	70% {
		background-position: 50% 0%;
	}

	100% {
		background-position: 0% 50%;
	}
}

// @mixin dots($count) {

// 	$text-shadow: ();
	
// 	@for $i from 0 through $count {
// 		$text-shadow: $text-shadow,
// 			(-.7+(random()) * 5) + em
// 			(-.7+(random()) * 5) + em
// 			7px
// 			hsla(random() * 360, 100%, 50%,.9);
// 	}
// 	text-shadow: $text-shadow;
// }

// section::before, section::after,
// .intro::before, .intro::after {
// 	position: fixed;
// 	top: 50%;
// 	left: 50%;
// 	width: 3em;
// 	height: 3em;
// 	content: '.';
// 	mix-blend-mode: screen;
// 	animation: 44s -27s move infinite ease-in-out alternate;
	
// }


// section::before {
// 	@include dots(40);
// 	animation-duration: 44s;
// 	animation-delay: -27s;
// }

// section::after {
// 	@include dots(40);
// 	animation-duration: 43s;
// 	animation-delay: -32s;
// }

// .intro::before {
// 	@include dots(40);
// 	animation-duration: 42s;
// 	animation-delay: -23s;
// }

// .intro::after {
// 	@include dots(40);
// 	animation-duration: 41s;
// 	animation-delay: -19s;
// }


// @keyframes move {
// 	from {
// 		transform: rotate(0deg) scale(12) translateX(-20px);
// 	}
// 	to {
// 		transform: rotate(360deg) scale(18) translateX(20px);
// 	}
// }

@media screen and (max-width: 600px) {
	.inline {
		display: block;
	}
}

</style>
