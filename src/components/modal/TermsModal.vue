<template>
    <div id="termsModal" class="modal fade terms-modal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <img src="@/assets/modal/close.svg">
                    </button>
                </div>
                <div class="modal-body">
                    <h1 class="terms-modal-title">
                        COMO FUNCIONA A PLATAFORMA MPAYS
                    </h1>
                    <p class="terms-modal-text">
                        Fizemos o máximo para reduzir e simplificar as regras do nosso Site e SaaS. Por isso, separamos
                        abaixo os pontos mais importantes para você, que também podem ser lidos de forma bem completa e
                        detalhada nos nossos Termos de Uso.
                    </p>
                    <p class="terms-modal-text">
                        Além disso, estamos sempre disponíveis para tirar qualquer dúvida que você tenha na plataforma MPays
                        através do e-mail: financeiro@multti.com ou pelo telefone (51) 99980-0020.
                    </p>

                    <h2 class="terms-modal-subtitle">
                        1) O que fazemos?
                    </h2>

                    <p class="terms-modal-text">
                        Somos uma empresa de tecnologia que desenvolve soluções inteligentes para transações de pagamento
                        realizados no e-commerce com cartão de crédito, débito, boleto e PIX.
                    </p>

                    <p class="terms-modal-text">
                        O foco principal da empresa é o desenvolvimento de Sistemas Gerenciais de Negócios com um olhar
                        voltado para modelos de negócio tipo SaaS e que possuam intermediação de pagamentos.
                    </p>

                    <p class="terms-modal-text">
                        Atualmente nossos serviços estão disponíveis em dois planos de contratação, o plano: (i) padrão e o
                        (ii) caixa rápido. Além disso, oferecemos serviços para solicitação de saque dos valores
                        disponíveis, antecipação de recebível de crédito à vista, com prazo de até 2 (dois) dias úteis
                        (disponível no plano Caixa Rápido) e em até 10 (dez) dias úteis no plano Padrão. Para a antecipação
                        de recebíveis de crédito parcelado o prazo é de 3 (três) dias úteis para o plano de Caixa Rápido e
                        30 (trinta) dias úteis para o plano Padrão.
                    </p>

                    <h2 class="terms-modal-subtitle">
                        2) Como o nosso SaaS funciona?
                    </h2>

                    <p class="terms-modal-text">
                        Os usuários terão que criar uma conta de acesso (login e senha) para acessar a plataforma e os
                        serviços. Atualmente há três tipos de usuários:
                    </p>
                    <ul class="terms-modal-text-list">
                        <li class="terms-modal-text-item">Administrador Mpays: Usuário master, onde terá acesso aos
                            dados de
                            todas as lojas, extratos das transações, extratos das contas, solicitações de saque,
                            usuários
                            cadastrados pelas lojas e configuração das taxas dos planos.</li>
                        <li class="terms-modal-text-item">Administrador loja: Usuário que terá acesso aos dados da de
                            sua
                            empresa, extrato das transações, extrato da sua conta, solicitações de saque e cadastro de
                            usuários que poderão acessar as informações da loja.</li>
                        <li class="terms-modal-text-item">Usuário da loja: Usuário que o administrador cadastrar. Ele
                            poderá
                            ser limitado a visualização dos menus da plataforma. Você poderá consultar o extrato da
                            conta
                            onde é apresentada todas as movimentações da conta de sua empresa e a possibilidade de que a
                            empresa cadastre seus funcionários para acesso a plataforma de forma personalizada, sendo
                            possível bloquear sua visualização a determinadas telas através do perfil de acesso do
                            usuário
                            cadastrado pela loja.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>
<style scoped>
#termsModal {}

.modal-dialog {
    max-width: 79.375rem;
    width: 96%;
}

.modal-content {
    background: #FBFBFB;
}

.modal-header {
    border-bottom: unset;
    padding: 22px 20px 38px;
}

.modal-body {
    padding: 0 87px 100px;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.btn-close {
    background: unset;
    width: auto;
    height: auto;
    border-radius: unset;
}

.terms-modal-title {
    color: #000;
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: unset;
}

.terms-modal-subtitle {
    color: #000;
    font-size: .9375rem;
    font-weight: 500;
    line-height: 1.6;
    margin-bottom: unset;
}

.terms-modal-text {
    color: #000;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: unset;
}

.terms-modal-text-list {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-bottom: unset;
}

.terms-modal-text-item {
    color: #000;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: unset;
}

@media screen and (max-width: 513px) {
    .modal-header {
        padding-bottom: unset;
    }

    .btn-close img {
        width: 2rem;
        height: 2rem;
    }

    .modal-body {
        padding: 0 20px 40px;
    }
}
</style>