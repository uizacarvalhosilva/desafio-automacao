import { checkoutElements } from "./checkoutElements";

const checkoutActions = {
    adicionarCarrinho(){
        cy.get(checkoutElements.carrinho).click();
    },
    irCarrinho(){
        cy.get(checkoutElements.step1Carrinho).click();
    },
    validarPreco(price){
        cy.get(checkoutElements.precoProduto).should('contain.text', price);
    },
    irCheckout(){
        cy.get(checkoutElements.checkout).click();
    }
};

export default checkoutActions;