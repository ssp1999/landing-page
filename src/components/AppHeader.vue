<template>
    <header class="header">
        <div class="container">
            <div class="header-logo">
                <img class="header-logo-image" src="@/assets/header/logo.svg">
            </div>
            <div class="header-navbar">
                <a class="header-navbar-link" href="#solutions">Soluções</a>
                <a class="header-navbar-link" href="#tariffs">Tarifas</a>
                <a class="header-navbar-link" href="#statements">Depoimentos</a>
                <a class="header-navbar-link" href="#register">Cadastro</a>
                <a class="header-navbar-link" href="#contact">Contato</a>
                <button type="button" class="header-navbar-button">Entrar</button>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.header {
    margin-top: 3.125rem;
}

.container {
    justify-content: space-between;
}

.header-navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.875rem;
}

.header-navbar-link {
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

.header-navbar-link:hover {
    color: #9708cc;
}

.header-navbar-button {
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

.header-navbar-button:hover {
    background-color: #ffffff;
    color: #9708cc;
    font-weight: 700;
    transform: scale(1.1);
}
</style>