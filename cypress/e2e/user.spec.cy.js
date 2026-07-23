import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'



const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()



describe('Orange HRM - Tests', () => {

  const selectorsList = {
    
    
  
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dropdownContainer: ".oxd-select-text",
    dropdownOption: ".oxd-select-option",
    dateCloseButton: ".--close",
    submiteButton: "[type='submit']",
  }

  it.only('User info update - Sucess', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    
    
   

    // LOGIN
    /*
    
    

    // CAMPOS DE TEXTO
    cy.get(selectorsList.firstNameField).clear().type('Letícia')
    cy.get(selectorsList.middleNameField).clear().type('Caroline')
    cy.get(selectorsList.lastNameField).clear().type('Freitas Silva')
    cy.get(selectorsList.genericField).eq(3).clear().type('employeeId')
    cy.get(selectorsList.genericField).eq(4).clear().type('otherId')
    cy.get(selectorsList.genericField).eq(5).clear().type('123Test')

    // License Expiry Date
    cy.get(selectorsList.dateField).eq(0).clear().type('2026-14-07')
    cy.get(selectorsList.dateCloseButton).click({ force: true })

    // SALVAR
    cy.get(selectorsList.submiteButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')

    // FECHAR TOAST E GARANTIR QUE SUMIU
    cy.get('.oxd-toast-close').click()
    cy.get('.oxd-toast').should('not.exist')

    // DROPDOWN DE NACIONALIDADE
    cy.get(selectorsList.dropdownContainer).eq(0)
      .should('be.visible')
      .click({ force: true })

    cy.get('.oxd-select-dropdown', { timeout: 10000 })
      .should('exist')
      .and('be.visible')

    cy.get(selectorsList.dropdownOption)
      .contains('Algerian')
      .click()

    // DROPDOWN DE MARITAL STATUS
    cy.get(selectorsList.dropdownContainer).eq(1)
      .should('be.visible')
      .click({ force: true })

    cy.get('.oxd-select-dropdown', { timeout: 10000 })
      .should('exist')
      .and('be.visible')

    cy.get(selectorsList.dropdownOption)
      .contains('Single')
      .click()

    // Date of Birth
    cy.get(selectorsList.dateField).eq(1).clear().type('1992-14-11')*/
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
