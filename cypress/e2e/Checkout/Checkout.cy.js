/// <reference types="cypress" />
import loginActions from '../../support/Login/loginActions';
import filtrarActions from '../../support/FiltrarProdutos/filtrarActions';
import  commonFunctions  from '../../support/common_functions';
import checkoutActions from '../../support/Checkout/checkoutActions';

describe('Funcionalidade: Checkout - Fluxos de Compra', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    });
    commonFunctions.acessarSite();
  })

  it('Efetuar compra com sucesso', () => {
    filtrarActions.filtrarProdutoPorNome('Total Moisture Facial Cream');
    checkoutActions.validarPreco('38.00');
    checkoutActions.adicionarCarrinho();
    commonFunctions.validarTitulo('Shopping Cart');
    checkoutActions.irCarrinho();
    loginActions.fazerLogin("válido");
    commonFunctions.validarURL('/index.php?rt=checkout/confirm');
    commonFunctions.validarTitulo('Checkout Confirmation');
    checkoutActions.irCheckout();
    commonFunctions.validarURL('/index.php?rt=checkout/success');
    commonFunctions.validarTitulo('Your Order Has Been Processed!');
  })
})

afterEach(() => {
  cy.screenshot();
})