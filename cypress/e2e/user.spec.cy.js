import userData from '../fixtures/user-data.json'

describe('Orange HRM - Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submiteButton: "[type='submit']",
  }
  
  it.only('User info update - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Letícia')
    cy.get(selectorsList.middleNameField).clear().type('Caroline')
    cy.get(selectorsList.lastNameField).clear().type('Freitas Silva')
    //cy.get(selectorsList.genericField).eq(4).type('nicknameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('employeeId')
    cy.get(selectorsList.genericField).eq(4).clear().type('otherId')
    cy.get(selectorsList.genericField).eq(5).clear().type('123Test')
    cy.get(selectorsList.dateField).eq(0).clear().type('2026-14-07')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submiteButton).eq(0).click()
    cy.get('body').should('contain','Successfully Updated')
    cy.get('.oxd-toast-close')
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
  })
}) 