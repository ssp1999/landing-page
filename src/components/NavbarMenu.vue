<template>
    <div class="navbar-menu" :class="{ 'navbar-menu--sidenav': isSidebar }">
        <a class="navbar-menu-link" href="#solutions">Soluções</a>
        <a class="navbar-menu-link" href="#tariffs">Tarifas</a>
        <a class="navbar-menu-link" href="#statements">Depoimentos</a>
        <a class="navbar-menu-link" href="#register">Cadastro</a>
        <a class="navbar-menu-link" href="#contact">Contato</a>
        <button v-if="showSignIn" type="button" class="navbar-menu-button">Entrar</button>
    </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'

const { showSignIn } = defineProps({
    showSignIn: {
        type: Boolean,
        default: true
    },
    isSidebar: {
        type: Boolean,
        default: false
    }
})
</script>
<style scoped>
.navbar-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.875rem;
}

.navbar-menu-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
    color: #ffffff;
    font-size: .875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    transition: all 0.3s ease;
}

.navbar-menu-link:hover {
    color: #9708cc;
}

.navbar-menu-button {
    display: flex;
    width: 6.5625rem;
    height: 1.75rem;
    padding: .375rem 1.8125rem;
    justify-content: center;
    align-items: center;
    background-color: #fff0;
    color: #fff;
    border-radius: 5px;
    border: 1px solid #fff;
    cursor: pointer;
    transition: all 0.3s ease;
}

.navbar-menu-button:hover {
    background-color: #ffffff;
    color: #9708cc;
    font-weight: 700;
    transform: scale(1.1);
}

.navbar-menu--sidenav {
    display: flex !important;
    flex-direction: column;
    align-items: initial;
}

.navbar-menu--sidenav .navbar-menu-link {
    color: #5E5873;
    font-size: .875rem;
    font-weight: 500;
    line-height: 1.64;
}


@media screen and (max-width: 849px) {
    .navbar-menu {
        display: none;
    }
}
</style>