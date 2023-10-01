
<template>
    <app-header></app-header>
    <main class="main">
        <app-hero />
        <app-solutions />
        <app-tariffs />
        <app-statements />
        <app-register />
        <app-contact />
        <img class="whatsapp" src="@/assets/whatsapp.svg">
    </main>
    <app-footer />
</template>

<script  lang="ts" setup>
import AppHeader from '../components/AppHeader.vue'
import AppHero from '../components/AppHero.vue'
import AppSolutions from '../components/AppSolutions.vue'
import AppTariffs from '../components/AppTariffs.vue'
import AppStatements from '../components/AppStatements.vue'
import AppRegister from '../components/AppRegister.vue'
import AppContact from '../components/AppContact.vue'

import AppFooter from '../components/AppFooter.vue'
// import TermsModal from '../components/modal/TermsModal.vue'
</script>
<style>
.container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1170px;
    padding-inline: 1.875rem;
}

.section-title {
    font-size: 3.0625rem;
    font-weight: 400;
    margin-bottom: unset;
}

.section-text {
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.77;
    margin-bottom: unset;
}

.form-columns {
    display: flex 0 11%;
    flex-direction: column;
    gap: 1.5rem;
}

.form-field {
    display: flex;
    flex-direction: column;
    gap: .4375rem;
}

.form-field label {
    color: #6F6F6F;
    font-size: .75rem;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: unset;
}

.form-field .form-control {
    color: #5e5873;
    font-size: .75rem;
    font-weight: 400;
    line-height: 2;
}

.form-field .form-control::placeholder {
    color: #B9B9C3;
}

.form-field .form-select {
    color: #5e5873;
    font-size: .75rem;
    font-weight: 400;
    line-height: 2;
}

.whatsapp {
    position: fixed;
    top: 80%;
    right: 1%;
    padding: 10px;
    z-index: 10000000;
    cursor: pointer;
}
</style>