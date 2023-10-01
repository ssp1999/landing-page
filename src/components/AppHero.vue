<template>
    <section class="hero" id="hero">
        <div class="container">
            <div class="hero-information text-white">
                <h1 class="section-title">
                    Tecnologia e segurança pra você
                    <b>vender mais.</b>
                </h1>
                <p class="section-text">
                    Venda online com a segurança e tecnologia mpays. Soluções simples e flexíveis para digitalizar o seu
                    negócio.
                </p>
            </div>
            <div class="hero-image">
                <img class="hero-image-picture" src="@/assets/hero/pixelbook-go.png" />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.hero:before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    min-height: 52.9375rem;
    display: block;
    background: linear-gradient(131deg, #43CBFF 0%, #9708CC 125.65%);
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
}

.hero-information {
    max-width: 28.75rem;
    display: flex;
    flex-direction: column;
    gap: 1.375rem;
    margin-block: 7.25rem;
}

.section-text {
    max-width: 27.3314rem;
}

.hero-image img {
    width: 100%;
}
</style>