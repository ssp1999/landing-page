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
    height: 100%;
    display: block;
    background: url('@/assets/hero/background.png');
    background-size: 100% 59.1875rem;
    background-repeat: no-repeat;
    z-index: -1;

}

.hero-information {
    max-width: 28.75rem;
    display: flex;
    flex-direction: column;
    gap: 1.375rem;
    margin-block: 9.3125rem;
}

.section-text {
    max-width: 27.3314rem;
}

.hero-image {
    position: relative;
    margin-top: 2.5rem;
    width: clamp(30.4375rem, 51vw, 44.25rem);
    height: clamp(23.625rem, 39vw, 33.875rem);
}

.hero-image-picture {
    position: absolute;
    left: -1.5rem;
    width: clamp(30.4375rem, 51vw, 44.25rem);
}

@media screen and (max-width: 968px) {
    .container {
        flex-direction: column;
    }

    .hero-information {
        margin-block: 3.125rem;
    }

    .hero-image {
        margin-top: -1.875rem;
    }

    .hero-image-picture {
        left: unset;
    }
}

@media screen and (max-width: 513px) {
    .hero:before {
        background: url('@/assets/hero/background-mobile.png');
        background-size: 100% 53.5625rem;
        background-repeat: no-repeat;
    }

    .hero-image {
        width: clamp(19.6875rem, 92vw, 30.4375rem);
        height: clamp(15.0625rem, 71vw, 23.625rem);
    }

    .hero-image-picture {
        width: clamp(19.6875rem, 92vw, 30.4375rem);
    }
}
</style>