Cypress.Commands.add('acessarHome',() => {
    cy.visit('/')
    //checkpoint
    cy.url().should('include','/')
    cy.contains('h1','Faça seu login')
})
Cypress.Commands.add('PreencherFormLogin',(email, password) => {
    cy.get('#email').type(email)
    cy.get('#password').type(password)
})
Cypress.Commands.add('clicar',(textoBtn) => {
    cy.contains('button[type=submit]', textoBtn).click();
})
Cypress.Commands.add('validarMsg',(msgEsperada) => {
    cy.get('.Toastify__toast-body')
      .should('be.visible')
      .and('have.text', msgEsperada)
})
Cypress.Commands.add('validarMsgErro',(msgEsperada) => {
    cy.get('[class^="home_errorText"]')
      .should('be.visible')
      .and('contain.text', msgEsperada)
      //.and('have.css','color','rgb(#FFF)')
})
