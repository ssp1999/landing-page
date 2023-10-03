<template>
    <section class="solutions" id="solutions">
        <div class="container">
            <div id="carouselSolutions" class="carousel slide">
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselSolutions"
                    data-bs-slide="prev">
                    <img src="@/assets/solutions/chevron-left.svg">
                    <span class="visually-hidden">Anterior</span>
                </button>
                <div class="carousel-inner">
                    <div class="carousel-item" v-for="(solution, i) in solutions" :key="i" :class="{ 'active': i === 0 }">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="card-title">{{ solution.title }}</h1>
                                <p class="card-text">{{ solution.description }}</p>
                                <a :href="solution.link" class="card-link">{{ solution.linkText }}</a>
                            </div>
                            <div class="card-image">
                                <img :src="solution.imagePath" class="image-desktop">
                                <img :src="solution.imageMobilePath" class="image-mobile">
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselSolutions"
                    data-bs-slide="next">
                    <img src="@/assets/solutions/chevron-right.svg">
                    <span class="visually-hidden">Próximo</span>
                </button>
                <div class="carousel-indicators">
                    <button v-for="(solution, i) in solutions" :key="i" type="button" data-bs-target="#carouselSolutions"
                        :data-bs-slide-to="i" :class="{ 'active': i === 0 }"></button>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { Carousel } from 'bootstrap'
import useSolutionsStore from '../stores/solutions'

const solutionsStore = useSolutionsStore()

const solutions = solutionsStore.solutions

onMounted(() => {
    new Carousel('#carouselSolutions')
})
</script>
<style scoped>
.solutions {
    padding-block: 8rem;
}

.carousel-inner {
    border-radius: 16px;
    box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.15);
    max-width: 57.375rem;
}

.carousel {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.carousel-indicators {
    bottom: -3.4375rem;
    gap: 15px;
    align-items: center;
}

.carousel-indicators button {
    width: .75rem;
    height: .75rem;
    background: #B9B9C3;
    border-radius: 40rem;
    border: unset;
    transition: all .3s ease-in-out;
    margin: unset;
}

.carousel-indicators button:hover,
.carousel-indicators button.active {
    width: 1rem;
    height: 1rem;
    background: #7367F0;
}

.carousel-control-prev,
.carousel-control-next {
    position: initial;
    width: auto;
    flex: 1;
}

.card {
    min-height: 32.3125rem;
    border-radius: 16px;
    background: #F8F8F8;
    display: flex;
    flex-direction: row;
}

.card-body {
    flex: 1 0 58%;
    display: flex;
    flex-direction: column;
    gap: 2.25rem;
    justify-content: center;
    padding-block: 20px;
    padding-inline: 75px 45px;
}

.card-image {
    flex: 1;
    display: flex;
}

.card-image img {
    flex: 1;
}

.card-title {
    font-size: 1.75rem;
    font-weight: 500;
    margin-bottom: unset;
}

.card-text {
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.77;
    margin-bottom: unset;
}

.card-link {
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.77;
    text-decoration-line: underline;
}

.image-mobile {
    display: none;
}

@media screen and (max-width: 968px) {
    .card {
        flex-direction: column-reverse;
    }

    .image-desktop {
        display: none;
    }

    .image-mobile {
        display: block;
    }

    .carousel-inner,
    .card {
        border-radius: 40px;
    }

    .carousel-inner {
        max-width: 22.0625rem;
    }

    .card-body {
        padding-inline: 36px;
    }
}

@media screen and (min-width: 969px) {
    .carousel-indicators {
        display: none;
    }
}

@media screen and (max-width: 513px) {
    .card-title {
        font-size: 1.3125rem;
        font-weight: 500;

    }

    .card-text {
        font-size: .875rem;
        font-weight: 400;
        line-height: 1.5;
    }

    .card-link {
        font-size: .875rem;
        font-weight: 500;
        line-height: 2.27;
    }

    .carousel-control-prev,
    .carousel-control-next {
        display: none;
    }
}
</style>