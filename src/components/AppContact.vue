<template>
    <section class="contact" id="contact">
        <div class="container">
            <div class="contact-navbar">
                <div class="contact-navbar-left">
                    <div class="contact-navbar-item">
                        <h3 class="contact-navbar-item-title">Endereço</h3>
                        <p class="contact-navbar-item-description">
                            R. dos Andradas, 1234
                            <br />
                            Centro Histórico
                            <br />
                            Porto Alegre - RS
                            <br />
                            90020-008
                        </p>
                    </div>
                    <div class="contact-navbar-item">
                        <h3 class="contact-navbar-item-title">Legal</h3>
                        <div class="contact-nav-item-list">
                            <a class="contact-navbar-item-description contact-navbar-item-description--link"
                                @click.prevent="handleContact()">Termos de uso</a>
                            <div class="contact-navbar-item-description">Política de privacidade</div>
                        </div>
                    </div>
                    <div class="contact-navbar-item">
                        <h3 class="contact-navbar-item-title">Contato</h3>
                        <div class="contact-nav-item-list">
                            <div class="contact-navbar-item-description">contato@mpays.com</div>
                            <div class="contact-navbar-item-description">(51) 98314.3325</div>
                            <div class="contact-nav-item-icons">
                                <img src="@/assets/contact/linkedin.svg">
                                <img src="@/assets/contact/facebook.svg">
                                <img src="@/assets/contact/instagram.svg">
                            </div>
                        </div>
                    </div>
                    <div class="contact-navbar-item">
                        <h3 class="contact-navbar-item-title">Aceitamos</h3>
                        <div class="contact-nav-item-list">
                            <div class="contact-nav-item-icons">
                                <img src="@/assets/contact/visa.svg">
                                <img src="@/assets/contact/mastercard.svg">
                                <img src="@/assets/contact/american-express.svg">
                            </div>

                            <div class="contact-nav-item-icons">
                                <img src="@/assets/contact/hipercard.svg">
                                <img src="@/assets/contact/elo.svg">
                                <img src="@/assets/contact/banescard.svg">
                            </div>
                            <div class="contact-nav-item-icons">
                                <img src="@/assets/contact/jcb.svg">
                                <img src="@/assets/contact/diners-club.svg">
                                <img src="@/assets/contact/pix.svg">
                            </div>
                        </div>
                        <div class="contact-navbar-item-description">*Demais cartões sob contratação.</div>
                    </div>
                </div>
                <div class="contact-navbar-right">
                    <div class="contact-navbar-item contact-navbar-item--last">
                        <div class="contact-nav-item-list">
                            <div class="contact-nav-item-icons">
                                <img src="@/assets/contact/pci-1.png">
                            </div>
                            <div class="contact-nav-item-icons">
                                <img src="@/assets/contact/appmax-1.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <terms-modal></terms-modal>
</template>

<script lang="ts" setup>
import TermsModal from '../components/modal/TermsModal.vue'
import { Modal } from 'bootstrap'

const handleContact = () => {
    new Modal('#termsModal', {
        backdrop: 'static'
    }).show()
}
</script>

<style scoped>
.contact {
    background: #F8F8F8;
    padding-block: 10.5rem 1.875rem;
}

.contact-navbar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 3.4375rem;
}

.contact-navbar-left,
.contact-navbar-right {
    display: flex;
    flex-direction: row;
    gap: 3.4375rem;
}

.contact-navbar-item {
    display: flex;
    flex-direction: column;
    gap: 1.4375rem;
}

.contact-navbar-item-title {
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.77;
    margin-bottom: unset;
}

.contact-navbar-item-description {
    font-size: .75rem;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: unset;
}

.contact-navbar-item-description--link {
    text-decoration: none;
    cursor: pointer;
    color: #5e5873;
}

.contact-nav-item-list {
    display: flex;
    flex-direction: column;
    gap: 1.4375rem;
}

.contact-nav-item-icons {
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
}
</style>