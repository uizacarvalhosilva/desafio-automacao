/// <reference types="cypress" />
import commonFunctions from "../../support/common_functions";
import filtrarActions from "../../support/FiltrarProdutos/filtrarActions";

describe('Funcionalidade: Filtrar/Pesquisar Produtos', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    });
    commonFunctions.acessarSite();
  })

  it('Filtrar por Nome', () => {
    filtrarActions.filtrarProdutoPorNome('extensions');
  })
})

afterEach(() => {
  cy.screenshot();
})