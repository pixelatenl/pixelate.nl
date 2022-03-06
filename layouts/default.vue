<template>
	<div class="main">
		<section class="page">
			<div class="page__inner">
				<logo />
				<intro />
			</div>
			<nuxt />
		</section>
		<section class="video">
			<div class="video__container">
				<div class="video__filter"></div>
				<video
					autoplay
					muted
					loop
					class="video__source"
					id="videoSource"
					aria-describedby="Pixelate is coding on a Macbook, pixelating great ideas"
					aria-hidden="true"
					tabindex="-1"
				>
					<source src="~/static/video/video.mp4" type="video/mp4" />
					<source src="~/static/video/video.ogv" type="video/ogg" />
					<source src="~/static/video/video.webm" type="video/webm" />
					<p>Your browser cannot play the provided video file.</p>
				</video>
			</div>
		</section>
		<footer class="page__footer">
			Pixelate BV &#169; 2003 -
			<span id="copyrightYear">{{ currentYear }}</span> // Chamber of
			Commerce 32144761
		</footer>
	</div>
</template>
<script>
import Logo from '~/components/Logo.vue';
import Intro from '~/components/Intro.vue';

export default {
	data: () => {
		return {
			currentYear: new Date().getFullYear(),
		};
	},
	components: {
		Logo,
		Intro,
	},
	mounted() {
		const self = this;
		window.addEventListener('keyup', function (event) {
			if (event.keyCode === 27) {
				self.closeSheet();
			}
		});
	},
	methods: {
		closeSheet() {
			if (this.$route.name !== 'index') {
				this.$router.push({ path: '/' });
			}
		},
	},
};
</script>

<style lang="css" scoped>
.page {
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 2;
	width: 100%;
	height: 100%;
}
.page__inner {
	display: flex;
	height: 100vh;
	align-items: center;
	justify-content: center;
}
@media only screen and (max-width: 768px) {
	.page__inner {
		flex-direction: column;
		padding: var(--global--spacer--md);
	}
}
.page__footer {
	position: absolute;
	right: var(--global--spacer--sm);
	bottom: var(--global--spacer--sm);
	color: rgb(var(--global--color--primary--100));
	font-size: 0.7rem;
}

@media only screen and (max-width: 768px) {
	.page__footer {
		padding: 20px;
	}
}

.video {
	animation: fadeIn 1s ease-in;
}
.video__container {
	position: fixed;
	right: 0;
	bottom: 0;
	min-width: 100%;
	min-height: 100%;
}
.video__filter {
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 1;
	width: 100%;
	height: 100%;
	background-color: rgba(var(--global--color--primary--500), 0.82);
}
.video__source {
	position: absolute;
	bottom: 0;
	z-index: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
