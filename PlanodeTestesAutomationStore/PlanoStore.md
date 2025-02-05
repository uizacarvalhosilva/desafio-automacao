# Plano de Testes - Automation Test Store

## Objetivo
O objetivo deste plano de testes é garantir que o site **Automation Test Store** funcione corretamente em todas as suas funcionalidades críticas, com foco na experiência do usuário e na integridade das operações principais, como cadastro, login, pesquisa de produtos, adição ao carrinho e processo de checkout.

## Escopo
O plano de testes cobrirá os seguintes aspectos do site:
- **Login de Usuário**
- **Cadastro de Novo Usuário**
- **Pesquisa e Filtragem de Produtos**
- **Adição de Produtos ao Carrinho**
- **Processo de Compra (Checkout)**

O escopo de testes inclui tanto testes manuais quanto automatizados, com foco em:
1. **Casos de Teste Manuais** para validar as funcionalidades.
2. **Automação de Testes com Cypress** para garantir a confiabilidade das interações da interface de usuário e testes regressivos.

### Funcionalidades a Serem Testadas
- **Login**
- **Cadastro de Usuário**
- **Filtragem de Produtos**
- **Carrinho de Compras**

## Critérios de Aceite

#### 1. **Cadastro de Usuário (Fluxo Feliz e Fluxos Alternativos)**
- **Fluxo Feliz:** O usuário preenche os dados corretamente, envia o formulário e é redirecionado para a página de conta.
- **Fluxos Alternativos:**
  - **Erro de Senha Inválida:** Se a senha não atender aos requisitos, a página deve exibir um erro claro.
  - **Erro de E-mail Já Cadastrado:** Se o e-mail já for usado, o sistema deve alertar o usuário.

#### 2. **Pesquisa e Filtragem de Produtos**
- Testar diferentes filtros (preço, categoria) e verificar se a lista de produtos é corretamente atualizada com base nas seleções.
  - **Erro de Produto não encontrado:** Se o produto não existir a página deve exibir um erro/aviso de produto não encontrado ou itens similares.

#### 3. **Processo de Pagamento**
- **Método de Cartão de Crédito:** Verificar se o pagamento via cartão de crédito é processado corretamente.
- **Método de Boleto:** Verificar se o pagamento via boleto pode ser gerado corretamente.

#### 4. **Cancelamento de Pedido**
- Simular um fluxo de cancelamento de compra e verificar se o cancelamento é realizado com sucesso.

## Cenários de Testes (BDD)

### 1. **Login**
**Dado** que o usuário está na página de login  
**Quando** ele insere as credenciais válidas e clica em "Login"  
**Então** o usuário deve ser autenticado com sucesso e redirecionado para a página da conta.

### 2. **Cadastro de Usuário**
**Dado** que o usuário está na página de cadastro  
**Quando** ele preenche os campos de cadastro com informações válidas e envia o formulário  
**Então** o novo usuário deve ser cadastrado com sucesso e redirecionado para a página da conta.

### 3. **Filtragem de Produtos**
**Dado** que o usuário está na página de produtos  
**Quando** ele utiliza os filtros (por categoria, preço, etc.)  
**Então** a lista de produtos deve ser filtrada corretamente de acordo com as opções selecionadas.

### 4. **Adição de Produto ao Carrinho**
**Dado** que o usuário está visualizando um produto  
**Quando** ele clica em "Add to Cart" (Adicionar ao Carrinho)  
**Então** o produto deve ser adicionado ao carrinho e aparecer na visualização do carrinho.

### 5. **Processo de Compra (Checkout)**
**Dado** que o usuário adicionou um produto ao carrinho  
**Quando** ele clica em "Checkout" e fornece as informações de pagamento e entrega  
**Então** o processo de checkout deve ser concluído com sucesso e a compra deve ser realizada sem erros.

## Riscos e Estratégias de Mitigação

### Riscos
- **Risco de falha de autenticação:** Usuários podem não conseguir realizar login devido a erros no formulário ou banco de dados.
- **Risco de falha no processo de checkout:** O checkout pode falhar devido a erros na integração de pagamento ou na verificação de estoque.
- **Risco de desempenho:** O site pode apresentar lentidão ao carregar a página de produtos com muitos itens.

### Estratégias de Mitigação
- **Login:** Realizar testes com diversos tipos de dados de entrada para garantir que erros sejam corretamente tratados (ex.: senha inválida, usuário não cadastrado).
- **Checkout:** Testar com diferentes métodos de pagamento (cartão de crédito, boleto) e validar todos os campos obrigatórios para garantir que o processo seja robusto.
- **Desempenho:** Realizar testes de carga para avaliar o tempo de resposta em diferentes cenários de uso.

## Prioridades

### Alta Prioridade
- **Login e Cadastro de Usuário:** Garantir que os usuários possam criar uma conta e acessar a plataforma sem erros.
- **Processo de Checkout:** Validar que os usuários possam comprar produtos de forma eficiente e segura.

### Média Prioridade
- **Filtragem de Produtos:** Validar que os filtros aplicados no site funcionem corretamente para que os produtos possam ser localizados com facilidade.

### OBSERVAÇÃO
- Esse site não possui integração com formas de pagamento, logo nos fluxos realizados não foi possível simular as compras trocando os meios de pagamento.