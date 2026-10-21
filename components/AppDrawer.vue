<template>
	<div class="sheet">
		<section class="sheet__content" :id="id">
			<header class="sheet__header">
				<h1 class="sheet__title">{{ title }}</h1>
				<NuxtLink to="/" class="sheet__close-button">Close</NuxtLink>
			</header>
			<slot />
		</section>
	</div>
</template>

<script setup>
const props = defineProps({
	id: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
});

const router = useRouter();

function onKeyup(event) {
	if (event.key === 'Escape') {
		router.push('/');
	}
}

onMounted(() => {
	window.addEventListener('keyup', onKeyup);
});

onBeforeUnmount(() => {
	window.removeEventListener('keyup', onKeyup);
});
</script>
