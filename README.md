# Catálogo Interativo Mobile

Aplicativo mobile feito em **React Native com Expo** para listar produtos de uma loja online, separados por categorias masculinas e femininas, consumindo a API pública [dummyjson.com](https://dummyjson.com).

## Funcionalidades

- Tela de **login** com validação simples (e-mail e senha obrigatórios);
- Armazenamento temporário dos dados do usuário usando **Redux Toolkit**;
- Tela principal com **abas (tabs)**:
  - Aba Masculino:
    - mens-shirts
    - mens-shoes
    - mens-watches
  - Aba Feminino:
    - womens-bags
    - womens-dresses
    - womens-jewellery
    - womens-shoes
    - womens-watches
- Lista de produtos por categoria, consumindo a API:

  - `https://dummyjson.com/products/category/{categoria}`

- Tela de **detalhes do produto**, com:
  - nome
  - imagem
  - descrição
  - preço
  - desconto (% e preço cheio riscado)
  - consumo da API: `https://dummyjson.com/products/{id}`
- **Logout** funcional, limpando o estado no Redux e voltando para o login.

## Tecnologias utilizadas

- React Native (Expo)
- React Navigation (Stack + Bottom Tabs)
- Axios
- Redux Toolkit
- React-Redux

## Como rodar o projeto

1. Clonar o repositório:
   ```bash
   git clone https://github.com/cavani530/mobile-catalogo.git

   cd mobile-catalogo
