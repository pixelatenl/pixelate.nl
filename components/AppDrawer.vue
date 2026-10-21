<template>
	<div class="sheet" ref="sheet">
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
const sheet = ref(null);

function close() {
	router.push('/');
}

function onKeyup(event) {
	if (event.key === 'Escape') {
		close();
	}
}

function onDocumentClick(event) {
	const target = event.target;
	// Clicks on links and buttons outside the sheet keep their own
	// navigation (e.g. switching from /about to /support).
	if (sheet.value && !sheet.value.contains(target) && !(target.closest && target.closest('a, button'))) {
		close();
	}
}

onMounted(() => {
	window.addEventListener('keyup', onKeyup);
	document.addEventListener('click', onDocumentClick);
});

onBeforeUnmount(() => {
	window.removeEventListener('keyup', onKeyup);
	document.removeEventListener('click', onDocumentClick);
});
</script>
