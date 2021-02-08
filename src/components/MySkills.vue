<template>
    <section>
		<vue-icon />
		<j-s-icon />
		<sass-icon />
		<responsive-design />
		<css-icon />
		<html-icon />
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
		height: 100vh;
	}

</style>