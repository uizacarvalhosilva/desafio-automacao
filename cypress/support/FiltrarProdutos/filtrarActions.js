import { checkoutElements } from '../Checkout/checkoutElements.js';

const filtrarActions = {
    filtrarProdutoPorNome(name){
        cy.get(checkoutElements.filtro).click().type(name + '{enter}');
        cy.get(checkoutElements.filtro).click().type(name + '{enter}');
        cy.get(checkoutElements.breadcrumb).should(($el) => {
          const text = $el.text().toLowerCase();
          expect(text).to.include(name.toLowerCase());
        });
        cy.get(checkoutElements.nomeProduto).should(($el) => {
            const text = $el.text().toLowerCase();
            expect(text).to.include(name.toLowerCase());
        });
    }
};
export default filtrarActions;