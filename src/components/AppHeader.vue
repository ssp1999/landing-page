<template>
    <header class="header">
        <div class="container">
            <button type="button" class="btn-raw header-hamburger" data-bs-toggle="offcanvas" data-bs-target="#sidenavMenu"
                aria-controls="sidenavMenu">
                <img src="@/assets/header/hamburger.svg">
            </button>
            <div class="header-logo">
                <img class="header-logo-image" src="@/assets/header/logo.svg">
            </div>
            <navbar-menu></navbar-menu>

            <button type="button" class="btn-raw header-user-circle">
                <img src="@/assets/header/user-circle.svg">
            </button>
        </div>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="sidenavMenu" aria-labelledby="sidenavMenuLabel">
            <div class="offcanvas-body">
                <navbar-menu :showSignIn="false" :isSidebar="true"></navbar-menu>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import NavbarMenu from './NavbarMenu.vue'
</script>

<style scoped>
.header {
    margin-top: 3.125rem;
}

.container {
    justify-content: space-between;
}

.btn-raw {
    display: inline-block;
    line-height: 1;
    height: auto;
    width: auto;
    padding: unset;
    margin: unset;
    background: unset;
    background-color: unset;
    border: unset;
    color: inherit;
    outline: none;
}

.header-hamburger,
.header-user-circle {
    padding: 4px;
    color: #FFFFFF;

}

.header-hamburger img,
.header-user-circle img {
    width: 2rem;
}

.offcanvas {
    max-width: 80%;
}

.offcanvas-body {
    padding: 3.4375rem 2.8125rem;
}

@media screen and (min-width: 850px) {

    .header-hamburger,
    .header-user-circle {
        display: none;
    }
}

@media screen and (max-width: 513px) {
    .header-logo-image {
        width: 7.125rem;
    }

    .header-hamburger img,
    .header-user-circle img {
        width: 1.5625rem;
    }
}
</style>