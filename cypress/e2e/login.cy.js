describe('Login', () => {
  beforeEach(() => {
    cy.acessarHome()
  })
  it('Login com sucesso', () => {
    const usuario = {
      email: 'teste.qa@gmail.com',
      password: 'Teste@123!'
    }
    cy.PreencherFormLogin(usuario.email, usuario.password)
    cy.clicar('Acessar')
    cy.validarMsg('Login realizado com sucesso!')
  })
  it('Não deve realizar Login com Senha incorreta', () => {
    const usuario = {
      email: 'teste.qa@gmail.com',
      password: 'Teste'
    }
    cy.PreencherFormLogin(usuario.email, usuario.password)
    cy.clicar('Acessar')
    cy.validarMsg('Credenciais inválidas. Verifique seu e-mail e senha.')

  })
  it('Não deve realizar Login com email incorreto', () => {
    const usuario = {
      email: 'teste.qagmailcom',
      password: 'Teste@123!'
    }
    cy.PreencherFormLogin(usuario.email, usuario.password)
    cy.clicar('Acessar')
    cy.validarMsgErro('Por favor, insira um e-mail válido.')

  })
  it('Não deve realizar Login com campos em branco', () => {
        cy.clicar('Acessar')
    cy.validarMsgErro('O campo de e-mail é obrigatório.')
    cy.validarMsgErro('O campo de senha é obrigatório.')

  })


})