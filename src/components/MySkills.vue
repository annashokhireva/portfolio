<template>
    <section class="main-section">
		<ul class="circle-container">
			<li><vue-icon class="img"/></li>
			<li><j-s-icon class="img" /></li>
			<li><sass-icon class="img" /></li>
			<li><responsive-design class="img" /></li>
			<li><css-icon class="img" /></li>
			<li><html-icon class="img" /></li>
		</ul>
		
	</section>
</template>

<script>
	import VueIcon from '../assets/icons/VueIcon.vue';
	import JSIcon from '../assets/icons/JSIcon.vue';
	import SassIcon from '../assets/icons/SassIcon.vue';
	import ResponsiveDesign from '../assets/icons/ResponsiveDesign.vue';
	import CssIcon from '../assets/icons/CssIcon.vue';
	import HtmlIcon from '../assets/icons/HtmlIcon.vue';

	export default {
		components: { 
			VueIcon,
			JSIcon,
			SassIcon,
			ResponsiveDesign,
			CssIcon,
			HtmlIcon 
		},
	}
</script>

<style lang="scss" scoped>

	section {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	// section {
	// 	background-image: url('../assets/img/iPad.jpg');
	// 	background-size: cover;
	// 	background-position-x: right;
	// 	background-position-y: -50%;
	// 	background-repeat: no-repeat;
	// }


	@mixin on-circle($item-count, $circle-size, $item-size) {
		position: relative;
		width:  $circle-size;
		height: $circle-size;
		padding: 0;
		border-radius: 50%; 
		list-style: none;       
	
			> * {
				display: block;
				position: absolute;
				top:  50%; 
				left: 50%;
				width:  $item-size;
				height: $item-size;
				margin: -($item-size / 2);
			
				$angle: (360 / $item-count);
				$rot: 0;

				@for $i from 1 through $item-count {
				&:nth-of-type(#{$i}) {
					transform: 
					rotate($rot * 1deg) 
					translate($circle-size / 2) 
					rotate($rot * -1deg);
				}

				$rot: $rot + $angle;
				}
		}
	}

	.circle-container {
		@include on-circle($item-count: 6, $circle-size: 20em, $item-size: 7em); 
		margin: 5em;
		// border: solid 5px rgb(235, 235, 235);
		
		.img { 
			display: block; 
			width: 80%; 
			height: 80%;
			padding: 0.2em;
			
			filter: grayscale(100%);
			
			transition: .15s;
			box-sizing: content-box;
			
			&:hover,
			&:active {
				width: 100%; 
				height: 100%;
	}
  }
}

</style>