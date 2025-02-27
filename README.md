# Projeto Automação Site Automation Store

## Descrição
Este projeto tem como objetivo testar e automatizar interações no site Automation Test Store. O foco principal é garantir que o site esteja funcionando corretamente em diversas interações, incluindo navegação, pesquisa de produtos, adição ao carrinho e checkout.

## Funcionalidades
- Login
- Cadastrar Usuário
- filtrar Produtos
- Realizar Compra (Checkout)

## Como Rodar os Testes
1. Clone o repositório:
   ```bash
   git clone <https://github.com/uizacarvalhosilva/desafio-automacao.git>
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute os testes:
   ```bash
   npx cypress open
   ```
4. Execute os testes no modo headless e gere o report html das execuções:
   ```bash
   npx cypress run --headless
   ```