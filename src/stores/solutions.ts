import { defineStore } from 'pinia'
import Picture1 from '@/assets/solutions/picture-1.png'
import Picture2 from '@/assets/solutions/picture-2.png'
import Picture3 from '@/assets/solutions/picture-3.png'
import Picture4 from '@/assets/solutions/picture-4.png'

interface Solution {
  title: string
  description: string
  linkText: string
  link: string
  imagePath: string
}

interface SolutionsInterface {
  solutions: Solution[]
}

export default defineStore('solutions', {
  state: (): SolutionsInterface => ({
    solutions: [
      {
        title: 'Pagamentos com máxima aprovação',
        description:
          'Venda online com a maior taxa de aprovação possível. Reduza o número de vendas recusadas, autorize o maior número de pagamentos, receba e gerencie seu dinheiro de forma flexível.',
        linkText: 'Cadastre-se',
        link: '#',
        imagePath: Picture1
      },
      {
        title: 'Checkout de alta conversão',
        description:
          'Uma solução de checkout com inúmeros recursos para potencializar ainda mais as suas vendas online. Customize toda a experiência de pagamento, ofereça produtos adicionais, recupere clientes, gere links para que outras pessoas possam promover seus produtos e mais.',
        linkText: 'Saiba mais',
        link: '#',
        imagePath: Picture2
      },
      {
        title: 'Controle total do seu fluxo financeiro',
        description:
          'Filtre as informações que você quer ver e acompanhe seu extrato diariamente para saber quando você vai receber pelas suas vendas. Precisa do dinheiro antes? Antecipe os seus recebíveis com apenas alguns cliques!',
        linkText: 'Clique e conheça',
        link: '#',
        imagePath: Picture3
      },
      {
        title: 'Receba as vendas parceladas em até 2 dias úteis',
        description:
          'Solicite a antecipação de recebíveis online e receba pagamentos com agilidade, sem burocracia e sem juros abusivos. Vamos ajudar o seu negócio a adquirir capital de giro recebendo um dinheiro que já é seu!',
        linkText: 'Aproveite',
        link: '#',
        imagePath: Picture4
      }
    ]
  })
})
