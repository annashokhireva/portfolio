<template>
<section class="main-section">

	<div class="intro" :class="{'intro-expanded' : expanded}">
		<span class="inline">
			<p>Hi, my name is</p>
			<h1>Anna Shokhireva.</h1>
		</span>
		<p>I'm a <b>front end developer </b> in the making.</p>	
	</div>

	<div class="scroll">

		<button @click="expand" :class="{'black-btn' : expanded}">
			Get in touch
		</button>

		<transition name="roll">
			<div v-if="expanded" class="contacts">
				<about-me />
			</div>
		</transition>
		
	</div>
	
	
</section>
</template>

<script>
	import AboutMe from '../components/AboutMe.vue';

	export default {
		components: {
		AboutMe
		},

		data() {
			return {
				expanded: false
			}
		},

		methods: {
			expand() {
				this.expanded = !this.expanded;
			}
		}

	};
</script>

<style lang="scss" scoped>

	section {
		overflow: scroll;
		// background: rgb(0, 21, 80);
		color: transparent;
		display: flex;
		flex-direction: column;
		justify-content: center;
		background: radial-gradient(farthest-side at bottom left, rgb(211, 139, 31) 10%, rgb(255, 73, 97) 80%, transparent),
					radial-gradient(farthest-corner at top right, rgb(106, 8, 136) 0%, rgb(60, 252, 236) 80%, transparent 400px),
					radial-gradient(farthest-corner at center,  rgb(198, 211, 19) 30%, rgb(96, 241, 0) 50%, transparent 700px);
		background-size: 150% 150%;
		animation: gradient 15s ease infinite;
	}

	.intro {
		margin-bottom: 50px;
	}

	.intro-expanded {
		margin-top: 80px;
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

	.contacts {
		height: auto;
	}

	.black-btn {
		border: 3px solid black;
		color: black;
		margin-top: 0;
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

	.roll-enter-active, .roll-leave-active {
		transition: all .3s ease-in;
	}
	.roll-enter, .roll-leave-to {
		transform: translateY(-20px);
		opacity: 0;
	}

	@media screen and (max-width: 600px) {
		.inline {
			display: block;
		}

		.intro-expanded {
			margin-top: 50%;
		}
	}

</style>
