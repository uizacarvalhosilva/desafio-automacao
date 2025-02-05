# Plano de Testes para o Site da Azul

### Escopo

A DROPBOOKS quer garantir a qualidade do sistema antes do lançamento, incluindo funcionalidade, desempenho e segurança. O Escopo desse projeto ambrange a identificação dos cenários para testes manuais e aplicação de demais técnicas de testes, bem como a validação dos cenários que podem ser automatizados afim de minimizar o tempo dos testes manuais e acelarar a identificação dos problemas.

### Objetivos

- Mapear os fluxos das funcionalidades críticas;
- Identificar possíveis problemas no sistema que possam impactar o usuário;
- Garantir o bom funcionamento do critérios de aceite;
- Garantir a qualidade do sistema;
- Automatização dos principais cenários identificados.

## Critérios de Aceite

### Criar Conta
- O usuário deve conseguir se registrar com e-mail e senha válidos.
- Deve ser enviado um e-mail de confirmação.
- Mensagem de erro clara para senhas fracas ou e-mails inválidos.

### Reservar Passagem
- O usuário deve conseguir selecionar origem, destino, data e quantidade de passageiros.
- Opções de voo disponíveis devem ser listadas corretamente.
- O sistema deve calcular o valor total corretamente, incluindo taxas.
- Confirmação de compra enviada por e-mail.

### Cancelar e Reembolsar
- O usuário deve visualizar passagens ativas e ter a opção de cancelamento.
- Caso aplicável, o sistema deve calcular e exibir taxas de cancelamento.
- O status da reserva deve ser atualizado corretamente.
- O reembolso deve ser processado conforme política da empresa.

## Riscos e Estratégias

- Risco: Instabilidade do site durante reservas - Alto Impacto  -  Estratégia: Realizar testes de carga e performance                            
- Risco: Erros em pagamentos - Alto Impacto  -  Estratégia: Testar múltiplos métodos de pagamento e verificar logs de - erro    
- Risco: Incompatibilidade com dispositivos móveis - Médio Impacto  -  Estratégia: Testar em diferentes sistemas operacionais e tamanhos de tela     
- Risco: Falha no envio de e-mails de confirmação  - Médio Impacto  -  Estratégia: Monitoramento de logs de envio e testes recorrentes            

## Priorização dos Testes

- Funcionalidade: Cadastro do usuário - Alto Impacto - Baixa Complexidade - Alta Prioridade         
- Funcionalidade: Login - Alto Impacto - Baixa Complexidade - Alta Prioridade         
- Funcionalidade: Logout -  Alto Impacto - Baixa Complexidade - Alta Prioridade         
- Funcionalidade: Recuperação de conta - Alto Impacto - Baixa Complexidade - Alta Prioridade         
- Funcionalidade: Alteração dos dados cadastrais -  Alto Impacto - Baixa Complexidade - Alta Prioridade         
- Funcionalidade: Reservar Passagem -  Alto Impacto - Alta Complexidade - Alta Prioridade         
- Funcionalidade: Cancelar e Reembolsar - Alto Impacto - Média Complexidade - Alta Prioridade         
- Funcionalidade: Métodos de Pagamento - Alto Impacto - Alta Complexidade - Alta Prioridade         
- Funcionalidade: Performance e Carga - Médio Impacto - Alta Complexidade - Média Prioridade        
- Funcionalidade:Compatibidade com Navegadores - Baixo Impacto - Média Complexidade - Baixa Prioridade        


## Conclusão

A solução proprosta foi o mapeamento do escopo, critérios de aceite para melhorar elaboração do Plano de testes e cenários de teste que podem ou não ser automatizados. 

(TAY A AUTOMAÇÃO FOI FEITA PARA A AUTOMATION STORE POIS NÃO CONSEGUI MESMO COM PLUGIN VALIDAR O SITE DA AZUL)
