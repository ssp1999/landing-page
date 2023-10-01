<template>
    <section class="solutions" id="solutions">
        <div class="container">
            <div id="carousel" class="carousel slide">
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
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
                                <img :src="solution.imagePath">
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <img src="@/assets/solutions/chevron-right.svg">
                    <span class="visually-hidden">Próximo</span>
                </button>
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
    new Carousel('#carousel')
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
    padding-block: 60px;
    padding-inline: 75px 65px;
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
</style>