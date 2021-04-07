<template>
    <section class="projects">
		<!-- <div class="front-end">
			<ul class="circle-container">
				<li><vue-icon-color class="icon"/></li>
				<li><j-s-icon-color class="icon" /></li>
				<li><sass-icon-color class="icon" /></li>
				<li><responsive-design-color class="icon" /></li>
				<li><css-icon class="icon" /></li>
				<li><html-icon class="icon" /></li>
			</ul>
		</div>

		<div class="back-end">

		</div> -->
	<article>
		<div class="image">
			<a href="https://annashokhireva.github.io/insurance-project/" target="_blank">
				<img src="../assets/img/insurance-project.png" alt="Insurance Project website">	
			</a>
		</div>
		<div>
			<h2>Insurance project</h2>
			<span>
				<html-icon class="icon tooltip" @mouseover.stop="showToolTip"/>
				<css-icon class="icon tooltip" />
				<responsive-design-color class="icon tooltip" />
				
			</span>
			<tool-tip text="HTML" v-if="tooltipVisible"/>
			<p>First group project for HTML and CSS course.</p>
		</div>
	</article>
		
	<article>
		<div class="image">
			<a href="https://annashokhireva.github.io/beer-project/" target="_blank">
				<img src="../assets/img/beer-project.png" alt="Beer Project">	
			</a>
		</div>
		<div>
			<h2>Beer project</h2>
			<span>
				<html-icon class="icon" />
				<css-icon class="icon" />
				
			</span>
			
			<p>Group project for JavaScript course. Getting a random beer by extracting data from PUNK API</p>
		</div>
	</article>
		
		
	</section>
</template>

<script>
	// import JSIconColor from '../assets/icons/JSIconColor.vue';
	// import SassIconColor from '../assets/icons/SassIconColor.vue';
	import CssIcon from '../assets/icons/CssIcon.vue';
	import HtmlIcon from '../assets/icons/HtmlIcon.vue';
	// import VueIconColor from '../assets/icons/VueIconColor.vue';
	import ResponsiveDesignColor from '../assets/icons/ResponsiveDesignColor.vue';
	import ToolTip from './ToolTip.vue';

	export default {
		components: {
			// JSIconColor,
			// SassIconColor,
			CssIcon,
			HtmlIcon,
			// VueIconColor,
			ResponsiveDesignColor,
			ToolTip
		},

		data() {
			return {
				tooltipVisible: false
			}
		},

		methods: {
			showToolTip() {
				this.tooltipVisible = true;
			}
		}
	}
</script>

<style lang="scss" scoped>

	.projects {
		background-color: rgb(243, 243, 243);
		padding: 40px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		
	}

	article {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 30px;
	}

	.image {
		width: 500px;

		img {
			width: 100%;
			height: auto;
		}
	}

	.icon {
		width: 50px;
		height: auto;
		margin: 1.5em;
		cursor: pointer;
	}


	// @mixin on-circle($item-count, $circle-size, $item-size) {
	// 	position: relative;
	// 	width:  $circle-size;
	// 	height: $circle-size;
	// 	padding: 0;
	// 	border-radius: 50%; 
	// 	list-style: none;  

	// 	// animation-name: spin;
	// 	// animation-duration: 10000ms;
	// 	// animation-iteration-count: infinite;
	// 	// animation-timing-function: linear;     

	// 		// @keyframes spin {
	// 		// 	from {
	// 		// 		transform:rotate(0deg);
	// 		// 	}
	// 		// 	to {
	// 		// 		transform:rotate(360deg);
	// 		// 	}
	// 		// } 
	
	// 		// &:hover {
	// 		// 	animation-play-state: paused;
	// 		// }	

	// 		> * {
	// 			display: block;
	// 			position: absolute;
	// 			top:  50%; 
	// 			left: 50%;
	// 			width:  $item-size;
	// 			height: $item-size;
	// 			margin: -($item-size / 2); 			
	// 			$angle: (360 / $item-count);
	// 			$rot: 0;

	// 			@for $i from 1 through $item-count {
	// 			&:nth-of-type(#{$i}) {
	// 				transform: 
	// 				rotate($rot * 1deg) 
	// 				translate($circle-size / 2) 
	// 				rotate($rot * -1deg);
	// 			}

	// 			$rot: $rot + $angle;
	// 			}
	// 	}
	// }

	// .circle-container {
	// 	@include on-circle($item-count: 6, $circle-size: 20em, $item-size: 7em); 
	// 	margin: 5em;
	// 	// border: solid 5px rgb(235, 235, 235);
		
	// 	.icon { 
	// 		display: block; 
	// 		width: 80%; 
	// 		height: 80%;
	// 		padding: 0.2em;
			
	// 		filter: grayscale(100%);
			
	// 		transition: .15s;
	// 		box-sizing: content-box;

			
	// 		&:hover,
	// 		&:active {
	// 			width: 100%; 
	// 			height: 100%;
	// 			filter: none;
	// 		}
	// 	}
	// }

</style>