<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-brand">
                <p class="footer-copyright">Copyright @ 2022 mpays</p>
                <img src="@/assets/footer/logo.svg">
            </div>
            <p class="footer-description">
                mpays é um produto da Multti Tecnologia e Integrações, empresa brasileira registrada no CNPJ nº
                33.511.889/0001-20. A atividade de subcredenciamento é dispensada de autorização do Banco Central do Brasil,
                conforme termos da Circular nº 3.885/2018. Demais dispositivos aplicáveis, como o disposto nas Circulares nº
                3.682/2013, 3.886/2018, 3.952/2019 e Resolução nº 24/2020 são rigorosamente cumpridos.
            </p>
        </div>
    </footer>
</template>

<script lang="ts" setup>

</script>
<style scoped>
.footer {
    background: #F8F8F8;
    padding-block: 1.875rem 1.4375rem;
}

.container {
    flex-direction: column;
    gap: 4.5rem;
}

.footer-brand {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-copyright {
    font-size: .75rem;
    font-weight: 400;
    margin-bottom: unset;
}

.footer-description {
    text-align: center;
    font-size: .75rem;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: unset;
}
</style>