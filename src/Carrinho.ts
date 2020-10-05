import { Produto } from './Produto'

export class Carrinho {
  private readonly produtos: Produto[] = []

  adiciona(...prod: Produto[]): void {
    // tslint:disable-next-line: prefer-for-of
    for (let i: number = 0; i < prod.length; i++) {
      if (prod[i]) {
        this.produtos.push(prod[i]);
      }
    }
  }

  toString(): string {
    return 'Conteúdo do Carrinho:\n' +
           '=====================\n' +
           this.produtos.join('\n') // junta os produtos separados por nova linha
  }
}
