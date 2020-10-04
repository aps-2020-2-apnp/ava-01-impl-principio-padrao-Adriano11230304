import { Produto } from './Produto'

export class Carrinho {
  private readonly produtos: Produto[] = []


  static novosProdutos(...p: string[]): Produto[] {
    const produtosNovos: Produto[] = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i: number = 0; i < p.length; i++) {
      if (p[i]) {
        const produto = new Produto(p[i]);
        produtosNovos.push(produto);
      }
    }
    return produtosNovos;
  }

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
