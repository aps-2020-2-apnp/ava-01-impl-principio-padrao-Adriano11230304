export class Produto {
  readonly descricao: string


  constructor(descricao: string) {
    this.descricao = descricao
  }

  public static novosProdutos(...p: string[]): Produto[]{
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


  toString(): string {
    return `Produto ${this.descricao}`
  }
}
