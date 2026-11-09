<template>
	<div class="main">
		<section class="page">
			<div class="page__inner">
				<logo />
				<intro />
			</div>
			<NuxtPage />
		</section>
		<section class="video">
			<div class="video__container">
				<div class="video__filter"></div>
				<div class="video__grain"></div>
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
					<source src="/video/video.mp4" type="video/mp4" />
					<source src="/video/video.webm" type="video/webm" />
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
<script setup>
const currentYear = new Date().getFullYear();

/*
 * Privacy-first analytics (Simple Analytics), loaded at the end of the body.
 */
useHead({
	script: [
		{
			src: 'https://scripts.simpleanalyticscdn.com/latest.js',
			async: true,
			tagPosition: 'bodyClose'
		}
	]
});
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
	color: rgba(var(--global--color--white), 0.66);
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
	background-color: rgba(var(--global--color--primary--500), 0.85);
}
.video__grain {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	width: 100%;
	height: 100%;
	pointer-events: none;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E");
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
