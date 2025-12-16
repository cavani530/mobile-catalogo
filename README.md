# 📱 Catálogo Interativo Mobile

Aplicativo mobile desenvolvido em **React Native com Expo**, como parte da disciplina **Mobile Development**, com o objetivo de criar um catálogo de produtos organizado por categorias, consumindo dados de uma API REST externa.

---

## 🎯 Objetivo do Projeto

Desenvolver um aplicativo mobile funcional e responsivo que permita:

* Simular login de usuário;
* Exibir produtos organizados por categorias masculinas e femininas;
* Navegar entre telas de listagem e detalhes do produto;
* Consumir dados de uma API REST utilizando Axios;
* Aplicar boas práticas de organização e componentização em React Native.

---

## 🚀 Tecnologias Utilizadas

* **React Native**
* **Expo**
* **Axios** (consumo de API REST)
* **React Navigation** (navegação entre telas)
* **JavaScript**

---

## 🌐 API Utilizada

Os dados dos produtos são consumidos da API pública **DummyJSON**:

* Listagem por categoria:

  ```
  https://dummyjson.com/products/category/{categoria}
  ```
* Detalhes do produto:

  ```
  https://dummyjson.com/products/{id}
  ```

Categorias utilizadas:

* Masculino: `mens-shirts`, `mens-shoes`, `mens-watches`
* Feminino: `womens-bags`, `womens-dresses`, `womens-jewellery`, `womens-shoes`, `womens-watches`

---

## 📲 Funcionalidades do Aplicativo

### 🔐 Tela de Login

* Simulação de autenticação;
* Validação de campos;
* Armazenamento temporário dos dados do usuário.

### 🛍️ Tela de Listagem de Produtos

* Produtos organizados por categorias;
* Navegação por abas (Masculino / Feminino);
* Consumo de dados via Axios.

### 📄 Tela de Detalhes do Produto

* Exibição de:

  * Nome
  * Imagem
  * Descrição
  * Preço
  * Desconto
* Navegação por parâmetro de ID.

### 🚪 Logout

* Limpa os dados armazenados;
* Retorna o usuário para a tela de login.

---

## 🖼️ Prints do Aplicativo

> **Obs:** Inserir abaixo os prints das telas do aplicativo:

* Tela de Login
* Tela de Listagem de Produtos (Tabs)
* Tela de Detalhes do Produto
* Logout

*(Adicionar imagens aqui)*

---

## ▶️ Como Executar o Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/cavani530/mobile-catalogo.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd mobile-catalogo
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Execute o projeto:

   ```bash
   npx expo start
   ```

5. Utilize um emulador ou o aplicativo **Expo Go** no celular para visualizar o app.

---

## 🎥 Vídeo Pitch

📌 Demonstração e explicação do aplicativo:

👉 [https://youtu.be/nHxJ5zdOOzQ](https://youtu.be/nHxJ5zdOOzQ)

---

## 👨‍💻 Autor

Projeto desenvolvido por **Diogo Fuentes**, como parte da avaliação da disciplina **Mobile Development**, com foco em consumo de API, navegação entre telas e boas práticas de desenvolvimento mobile.

---

✅ **Projeto acadêmico para fins educacionais**
