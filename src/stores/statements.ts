import { defineStore } from 'pinia'
import Picture1 from '@/assets/statements/picture-1.png'
import Picture2 from '@/assets/statements/picture-2.png'
import Picture3 from '@/assets/statements/picture-3.png'

interface Statements {
  description: string
  name: string
  occupation: string
  imagePath: string
}

interface statementsInterface {
  statements: Statements[]
}

export default defineStore('statements', {
  state: (): statementsInterface => ({
    statements: [
      {
        description:
          'A mpays foi a plataforma onde eu tive a maior taxa de aprovação de crédito do mercado.',
        name: 'Carlos Eduardo Amaral',
        occupation: 'CEO da Amaral Mídia',
        imagePath: Picture1
      },
      {
        description:
          'O principal diferencial é a taxa de cartão recusado ser muito baixa, aumentando nossa taxa de conversão e o faturamento.”',
        name: 'Renato Laureano',
        occupation: 'Fundador da Anellimn Store',
        imagePath: Picture2
      },
      {
        description:
          'Depois de muito pesquisar, decidi migrar para a mpays e já nas primeiras semanas nossa taxa de conversão subiu para 94%.',
        name: 'Armando Girão',
        occupation: 'Fundador da Orion E-commerce',
        imagePath: Picture3
      }
    ]
  })
})
