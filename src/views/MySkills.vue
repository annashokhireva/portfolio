<template>
	<section class="skills">
		<h2 class="heading">Things I've been working with</h2>
		<div class="grid">
			<div class="box">
				<html-icon class="skill-icon" />
				<h5>HTML</h5>
			</div>
			<div class="box">
				<css-icon class="skill-icon" />
				<h5>CSS</h5>
			</div>
			<div class="box">
				<sass-icon-color class="skill-icon"/>
				<h5>Sass</h5>
			</div>
			<div class="box">
				<j-s-icon-color class="skill-icon"/>
				<h5>JavaScript</h5>
			</div>
			<div class="box">
				<vue-icon-color class="skill-icon"/>
				<h5>VUE</h5>
			</div>
			<div class="box">
				<node-icon class="skill-icon"/>
				<h5>NodeJS</h5>
			</div>
			<div class="box">
				<php-icon class="skill-icon"/>
				<h5>PHP</h5>
			</div>
			<div class="box">
				<sqlite-icon class="skill-icon"/>
				<h5>SQLite</h5>
			</div>
			<div class="box">
				<figma-icon class="skill-icon"/>
				<h5>Figma</h5>
			</div>
		</div>
	</section>
</template>

<script>
	import CssIcon from '../assets/icons/CssIcon.vue';
	import FigmaIcon from '../assets/icons/FigmaIcon.vue';
	import HtmlIcon from '../assets/icons/HtmlIcon.vue';
	import JSIconColor from '../assets/icons/JSIconColor.vue';
	import NodeIcon from '../assets/icons/NodeIcon.vue';
	import PhpIcon from '../assets/icons/PhpIcon.vue';
	import SassIconColor from '../assets/icons/SassIconColor.vue';
	import SqliteIcon from '../assets/icons/SqliteIcon.vue';
	import VueIconColor from '../assets/icons/VueIconColor.vue';

	export default {
		components: { 
			HtmlIcon, 
			CssIcon,
			SassIconColor,
			JSIconColor,
			VueIconColor,
			NodeIcon,
			PhpIcon,
			SqliteIcon,
			FigmaIcon 
		},

	}
</script>

<style lang="scss" scoped>

	.skills {
		height: 100vh;
		padding-top: 5vmin;
		background: radial-gradient(farthest-side at bottom left, rgb(255, 255, 255) 10%, rgb(218, 231, 235) 80%, transparent),
					radial-gradient(farthest-corner at top right, rgb(204, 191, 191) 0%, rgb(255, 255, 255) 80%, transparent 400px);
		background-size: 150% 150%;
		animation: gradient 15s ease infinite;
	}

	.grid {
		margin: 5% 10%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-template-rows: auto;
		row-gap: 60px;
	}

	.box {
		width: 100px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		align-self: center;
		justify-self: center;
	}

	.skill-icon {
		height: 80px;
		width: 80px;
	}

</style>
