<template>
    <section class="register" id="register">
        <div class="container">
            <div class="register-header">
                <h1 class="section-title">
                    Crie sua conta
                </h1>
                <p class="section-text">
                    Preencha o formulário ao lado para cadastrar-se no mpays.
                </p>
            </div>
            <form class="register-form form-columns">
                <div class="form-field">
                    <label for="name" class="form-label">Nome e sobrenome *</label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="Nome">
                </div>
                <div class="form-field">
                    <label for="email" class="form-label">Email *</label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="E-mail">
                </div>
                <div class="form-field">
                    <label for="phone" class="form-label">Telefone *</label>
                    <input type="text" class="form-control" id="phone" name="phone" placeholder="Telefone">
                </div>
                <div class="form-field form-field--password">
                    <label for="password" class="form-label">Senha *</label>
                    <div class="input-group">
                        <input type="password" class="form-control" id="password" name="password" placeholder="********">
                        <span class="input-group-text">
                            <img src="@/assets/register/hide.svg">
                        </span>
                    </div>
                </div>
                <button type="button" class="register-form-button" @click="handleRegister()">Cadastrar</button>
            </form>
        </div>
    </section>
    <register-modal></register-modal>
</template>

<script lang="ts" setup>
import { Modal } from 'bootstrap'
import RegisterModal from './modal/RegisterModal.vue'

const handleRegister = () => {
    new Modal('#registerModal', {
        backdrop: 'static'
    }).show()
}
</script>

<style scoped>
.register {
    background: #ffffff;
    padding-block: 3.75rem;
}

.container {
    align-items: normal;
    gap: 4.4375rem;
}

.register-header {
    display: flex;
    flex-direction: column;
    gap: .875rem;
}

.form-columns {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.register-form {
    width: 100%;
    max-width: 27.6875rem;
}

.register-form-button {
    width: 8.8125rem;
    height: 2.375rem;
    color: #ffffff;
    background-color: #7d45dc;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    text-align: center;
    font-size: .875rem;
    font-weight: 500;
    letter-spacing: 0.4px;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.register-form-button:hover {
    transform: scale(1.1);
}

.form-field--password .form-control {
    border-right: unset;
}

.form-field--password .input-group-text {
    background: unset;
}

@media screen and (max-width: 968px) {
    .container {
        flex-direction: column;
        align-items: center;
    }

    .register-form {
        max-width: 33.4375rem;
    }
}
</style>