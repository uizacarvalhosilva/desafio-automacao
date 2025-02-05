/// <reference types="cypress" />
import cadastrarUsuario from '../../support/CadastrarUsuario/cadastrarUsuarioActions';
import loginActions from '../../support/Login/loginActions';
import commonFunctions from '../../support/common_functions';

describe('Funcionalidade: Cadastrar Cliente', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    });
    commonFunctions.acessarSite()
  });

  it('Cadastrar cliente com sucesso', () => {
    loginActions.validarPageLogin();
    cy.contains('Continue').click();
    cadastrarUsuario.preencherDadosUsuario();
    cadastrarUsuario.clicarContinuar();
    cadastrarUsuario.validarCadastro();
  });
});

afterEach(() => {
  cy.screenshot();
})