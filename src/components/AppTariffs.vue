<template>
    <section class="tariffs" id="tariffs">
        <div class="container">
            <div class="tariffs-description">
                <h1 class="section-title">
                    Simulador de vendas mpays
                </h1>
                <p class="section-text">
                    Veja quanto você recebe nas vendas no crédito, débito e parcelado.
                </p>
            </div>
            <div class="card">
                <div class="card-body">
                    <div class="form-columns">
                        <div class="form-field">
                            <label for="value" class="form-label">Valor</label>
                            <input type="text" class="form-control" id="value" name="value" placeholder="R$ 1.000,00">
                        </div>
                        <div class="form-field">
                            <label for="payment" class="form-label">Forma de pagamento</label>
                            <select class="form-select" type="payment" id="payment" name="payment">
                                <option selected>Crédito à vista</option>
                            </select>
                        </div>
                    </div>
                    <div class="result">
                        <h1 class="result-title">
                            VOCÊ RECEBE:
                        </h1>
                        <div class="result-main">
                            <div class="result-main-info">
                                <span>
                                    NA HORA
                                </span>
                                <span>
                                    Não disponível
                                </span>
                            </div>
                            <div class="result-main-info">
                                <span>
                                    EM 10 DIAS
                                </span>
                                <span>
                                    R$ 949, 70
                                </span>
                            </div>
                            <div class="result-main-info">
                                <span>
                                    EM 30 DIAS
                                </span>
                                <span>
                                    R$ 959, 70
                                </span>
                            </div>
                        </div>
                        <div class="result-main-tiny-text">
                            Todas as simulações usam as taxas iniciais informadas no site.
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Mask" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M6 11.5C9.05 11.5 11.5 9.05 11.5 6C11.5 2.95 9.05 0.5 6 0.5C2.95 0.5 0.5 2.95 0.5 6C0.5 9.05 2.95 11.5 6 11.5ZM6.1 6.95C6.3 6.9 7.95 6.3 7.95 5C7.95 4.15 7.4 3.4 6.6 3.15C5.55 2.75 4.4 3.3 4.05 4.35C4 4.6 4.1 4.9 4.35 4.9C4.6 5 4.9 4.85 5 4.6C5.2 4.1 5.8 3.8 6.3 4C6.7 4.15 6.95 4.5 6.95 4.95C6.95 5.5 6.1 5.9 5.8 6C5.55 6.1 5.4 6.4 5.5 6.65C5.55 6.85 5.75 7 5.95 7C6 7 6.05 7 6.1 6.95ZM10.5 6C10.5 3.5 8.5 1.5 6 1.5C3.5 1.5 1.5 3.5 1.5 6C1.5 8.5 3.5 10.5 6 10.5C8.5 10.5 10.5 8.5 10.5 6ZM6.25 8.1C6.3 8.1 6.35 8.15 6.35 8.15C6.4 8.2 6.45 8.25 6.4 8.3C6.45 8.35 6.45 8.45 6.45 8.5C6.45 8.65 6.4 8.75 6.3 8.85C6.2 8.95 6.1 9 5.95 9C5.8 9 5.7 8.95 5.6 8.85C5.5 8.75 5.45 8.65 5.45 8.5C5.45 8.44142 5.46716 8.4 5.48137 8.36569C5.49142 8.34142 5.5 8.32071 5.5 8.3C5.5 8.25 5.55 8.2 5.6 8.15C5.65 8.1 5.7 8.05 5.75 8.05C5.85 8 5.95 8 6.05 8C6.07875 8.02875 6.09097 8.04097 6.10567 8.04616C6.11653 8.05 6.12875 8.05 6.15 8.05C6.175 8.05 6.1875 8.0625 6.2 8.075C6.2125 8.0875 6.225 8.1 6.25 8.1Z"
                                    fill="black" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style scoped>
.tariffs {
    background: #e9ecef;
    padding-block: 8.875rem 10.3125rem;
}

.container {
    align-items: normal;
    gap: 4.0625rem;
}

.tariffs-description {
    max-width: 23.75rem;
    display: flex;
    flex-direction: column;
    gap: 1.6875rem;
}



.card {
    width: 100%;
    max-width: 41.5rem;
    min-height: 19.3125rem;
    border-radius: 16px;
    background: #f8f8f8;
    box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.15);
}

.card-body {
    display: flex;
    padding: 42px 29px 38px 36px;
    gap: 1.9375rem;
}

.form-columns {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.result {
    flex: 0 1 13.4375rem;
    display: flex;
    gap: 1.625rem;
    flex-direction: column;
}

.result-title {
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: unset;
}

.result-main {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.result-main-info {
    display: flex;
    flex-direction: row;
}

.result-main-info span {
    flex: 1;
    font-size: .75rem;
    line-height: 1.5;
}

.result-main-tiny-text {
    font-size: .75rem;
    line-height: 1.5;
}

.result-main-tiny-text svg {
    width: .75rem;
    height: .75rem;
    color: #7367F0;
}
</style>