<template>
    <div id="registerModal" class="modal fade register-modal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <img src="@/assets/modal/close.svg">
                    </button>
                </div>
                <div class="modal-body">
                    <img src="@/assets/modal/success.svg" width="143px">
                    <h1 class="register-modal-title">Finalize seu cadastro na plataforma e acesse seu e-mail para validação.
                    </h1>
                    <button type="button" class="register-modal-button" data-bs-dismiss="modal" aria-label="Close">Acessar
                        plataforma</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>
<style scoped>
.modal-dialog {
    max-width: 45rem;
    height: 30.625rem;
    width: 96%;
}

.modal-content {
    background: #F8F8F8;
}

.modal-header {
    border-bottom: unset;
    padding: 22px 20px 17px;
}

.modal-body {
    padding: 0 87px 92px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
}

.btn-close {
    background: unset;
    width: auto;
    height: auto;
    border-radius: unset;
}

.register-modal-title {
    color: #5E5873;
    text-align: center;
    font-size: 1.75rem;
    font-weight: 500;
    margin-bottom: unset;
}

.register-modal-button {
    display: flex;
    width: 16.9375rem;
    height: 2.375rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #ffffff;
    background-color: #7d45dc;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: .875rem;
    font-weight: 500;
    letter-spacing: 0.4px;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.register-modal-button:hover {
    transform: scale(1.1);
}
</style>