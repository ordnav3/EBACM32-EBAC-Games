import { fireEvent, screen } from '@testing-library/react'
import Produto from '..'
import { renderizaComProvider } from '../../../utils/tests'

const produto = {
  id: 2,
  categoria: 'RPG',
  imagem: '',
  plataformas: ['Windows', 'PS5', 'Xbox Series S/X'],
  preco: 199.9,
  precoAntigo: 299.9,
  titulo: 'Hogwarts Legacy'
}

describe('Testes para o componente produto', () => {
  test('Deve Renderizar corretamente', () => {
    renderizaComProvider(<Produto game={produto} />)
    expect(screen.getByText('Hogwarts Legacy')).toBeInTheDocument()
  })

  test('Deve adicionar um item ao carrinho ', () => {
    const { store } = renderizaComProvider(<Produto game={produto} />)
    fireEvent.click(screen.getByTestId('btn-adicionar-produto'))
    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
