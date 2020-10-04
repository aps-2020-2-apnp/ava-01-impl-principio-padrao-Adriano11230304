import { Produto } from './Produto'
import { Carrinho } from './Carrinho'

// consegue-se adicionar quantos produtos novos desejar;
const p1 = Carrinho.novosProdutos("Tripé Para Celular Flexivel", "Carregador de parede universal 2.1A, 2 portas USB, bivolt", "Caixa Multimidia Portatil Go 2, JBL");
const p2 = Carrinho.novosProdutos("Bateria Externa Carga Rápida 10,000Mah USB Tipo C", "Fones de Ouvido Xiaomi Redmi AirDots");
const p3 = Carrinho.novosProdutos("Honorall Full HD 1080 P Webcam USB Mini Câmera");

const carrinho = new Carrinho()

// consegue-se adicionar quantos produtos desejar ao carrinho;
carrinho.adiciona(p1[0],p1[1],p1[2]);
console.log(`${carrinho}`);
carrinho.adiciona(p2[0]);
carrinho.adiciona(p2[1],p3[0]);
console.log(`${carrinho}`);
