import { loginElements } from './loginElements';

const loginActions = {
    validarPageLogin(){
        cy.contains('Login or register').click();
        cy.url().should('include', '/index.php?rt=account/login');
        cy.get('.maintext').invoke('text').then((text) => {
            expect(text.trim()).to.eq('Account Login');
        });
        cy.get('.newcustomer').should('be.visible');
        cy.get('.returncustomer').should('be.visible');
    },
    fazerLogin(validacao){
        if(validacao == 'válido'){
            cy.get(loginElements.usuario).type(Cypress.env('usuario'));
            cy.get(loginElements.senha).type(Cypress.env('senha'));
        } else {
            cy.get(loginElements.usuario).type(Cypress.env('usuario_incorreto'));
            cy.get(loginElements.senha).type(Cypress.env('senha_incorreta'));
        }
        cy.get(loginElements.botaoLogin).click();
    },
    validarMessagemErro(){
        cy.get('.alert-danger').should('be.visible').and('contain.text', 'Error: Incorrect login or password provided.');
    }
};

export default loginActions;