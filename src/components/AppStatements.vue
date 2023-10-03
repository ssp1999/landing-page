<template>
    <section class="statements" id="statements">
        <div class="container">
            <div class="statements-header">
                <h1 class="section-title">
                    Depoimentos
                </h1>
                <p class="section-text">
                    O suporte ao cliente é nossa primeira prioridade.
                </p>
            </div>
            <div class="statements-body">
                <div id="carouselStatements" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item" v-for="(statement, i) in statements" :key="i"
                            :class="{ 'active': i === 0 }">
                            <div class="card">
                                <div class="card-avatar">
                                    <img :src="statement.imagePath">
                                </div>
                                <div class="card-body">
                                    <img class="card-quote" src="@/assets/statements/quote.svg">
                                    <h5 class="card-description">
                                        {{ statement.description }}
                                    </h5>
                                    <h1 class="card-name">
                                        {{ statement.name }}
                                    </h1>
                                    <p class="card-occupation">
                                        {{ statement.occupation }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-indicators">
                        <button v-for="(statement, i) in statements" :key="i" type="button"
                            data-bs-target="#carouselStatements" :data-bs-slide-to="i"
                            :class="{ 'active': i === 0 }"></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import useStatementsStore from '../stores/statements'

const statementsStore = useStatementsStore()

const statements = statementsStore.statements
</script>
<style scoped>
.carousel-inner {
    border-radius: 8px;
    max-width: 22rem;
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

.statements {
    background: #ffffff;
    padding-block: 7.5rem 3.75rem;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.statements-header {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin-bottom: 76px;
    text-align: center;
}

.statements-body {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.8125rem;
}

.card {
    background: transparent;
    border: unset;
}

.card-avatar {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    bottom: -3.4375rem;
}

.card-avatar img {
    width: 7.5rem;
    height: 7.5rem;
}

.card-body {
    height: 22rem;
    max-width: 22rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background: #FAFAFA;
    padding: 0 25px 56px;
    border-radius: 8px;
}

.card-quote {
    margin-bottom: 30px;
}

.card-description {
    color: #333;
    text-align: center;
    font-size: .875rem;
    font-weight: 400;
    margin-bottom: 16px;
}

.card-name {
    color: #333;
    text-align: center;
    font-family: Montserrat;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.77;
    margin-bottom: unset;
}

.card-occupation {
    color: #333;
    text-align: center;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: unset;
}

@media screen and (min-width: 969px) {
    .carousel-indicators {
        display: none;
    }

    .carousel-inner {
        max-width: unset !important;
        display: flex;
        flex-direction: row;
        gap: 1.8125rem;
    }

    .carousel-item {
        display: block;
        margin-right: unset;
    }
}
</style>