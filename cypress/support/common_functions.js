import { checkoutElements } from "./Checkout/checkoutElements";

const commonFunctions = {
    acessarSite(){
        cy.visit(Cypress.env('baseUrl'));
    },
    validarURL(url){
        cy.url().should('include', url); 
    },
    validarTitulo(titulo){
        cy.get(checkoutElements.titulo).invoke('text').then((text) => {
            expect(text.trim()).to.eq(titulo);
        });
    }
};
export default commonFunctions;