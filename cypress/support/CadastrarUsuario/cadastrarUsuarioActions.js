import { cadastroElements } from './cadastrarUsuarioElements';
const { faker } = require ('@faker-js/faker');

const cadastrarUsuario = {
    
    preencherDadosUsuario(){
        const nome = faker.person.firstName();   
        const lastName = faker.person.lastName();  
        const email = faker.internet.email();
        const telephone = faker.phone.number();   
        const fax = faker.phone.number();         
        const company = faker.company.name();      
        const address1 = faker.location.streetAddress();
        const address2 = faker.location.secondaryAddress();
        const city = faker.location.city();
        const loginName = faker.internet.username();
        const password = faker.internet.password();

        cy.get(cadastroElements.firstName).type(nome);
        cy.get(cadastroElements.lastName).type(lastName);
        cy.get(cadastroElements.email).type(email);
        cy.get(cadastroElements.telephone).type(telephone);
        cy.get(cadastroElements.fax).type(fax);
        cy.get(cadastroElements.company).type(company);
        cy.get(cadastroElements.address1).type(address1);
        cy.get(cadastroElements.address2).type(address2);
        cy.get(cadastroElements.city).type(city);
        cy.get(cadastroElements.postcode).type('90210');
        cy.get(cadastroElements.countryId).select('United States'); 
        cy.get(cadastroElements.zoneId).select('Alabama');
        cy.get(cadastroElements.loginName).type(loginName);
        cy.get(cadastroElements.password).type(password);
        cy.get(cadastroElements.confirm).type(password); 
        cy.get(cadastroElements.newsletter).check(); 
        cy.get(cadastroElements.agree).check();      
    },
    clicarContinuar(){
        cy.contains('Continue').click();
    },
    validarCadastro(){
        cy.url().should('include', '/index.php?rt=account/success');
        cy.get('.maintext').invoke('text').then((text) => {
            expect(text.trim()).to.eq('Your Account Has Been Created!');
        });
    },
    
}

export default cadastrarUsuario;