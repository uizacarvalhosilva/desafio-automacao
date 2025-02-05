/// <reference types="cypress" />
import loginActions from '../../support/Login/loginActions';
import commonFunctions from '../../support/common_functions';

describe('Funcionalidade: Login', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    });
    commonFunctions.acessarSite();
  })

  it('Fazer Login com credenciais inválidas', () => {
    loginActions.validarPageLogin();
    loginActions.fazerLogin("invalido");
    loginActions.validarMessagemErro();
  })
  
  it('Fazer Login com credenciais válidas', () => {
    loginActions.validarPageLogin();
    loginActions.fazerLogin("válido");
    commonFunctions.validarURL('index.php?rt=account/account');
    commonFunctions.validarTitulo('My Account');
  })
})

afterEach(() => {
  cy.screenshot();
})