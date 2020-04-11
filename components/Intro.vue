<template>
    <article class="intro">
        <h1 class="intro__header">Pixelating great ideas</h1>
        <p class="intro__line">Hi, I'm a freelance Product Designer and User Interface Developer </p>
        <p class="intro__line">I'm currently <strong>pixelating</strong> energy data for energyworx... </p>
        <div class="intro__actions">
            <div class="button-group">
                <nuxt-link to="/about" class="button-group__button button">About</nuxt-link>
                <nuxt-link to="/support" class="button-group__button button">Support</nuxt-link>
            </div>
        </div>
    </article>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.intro {
    margin: 3em 0;
    max-width: 40em;
    color: rgb(var(--global--color--white));
    vertical-align: top;
    opacity: 0;
    animation: fadeIn 1.5s ease-out;
    animation-delay: 2s;
    animation-fill-mode: forwards;
}

.intro__header {
    font-size: 2.3rem;
    margin: 0 0 var(--global--spacer--sm) 0;
}
@media only screen and (max-width: 768px) {
    .intro__header {
        font-size: 1.7rem;
        line-height: 1.7rem;
    }
}
.intro__line {
    margin: 0 0 var(--global--spacer--sm) 0;
}

.intro__actions {
    opacity: 0;
    margin: 1em 0;
    animation: fadeIn 1.5s ease-out;
    animation-delay: 2s;
    animation-fill-mode: forwards;
}

</style>
