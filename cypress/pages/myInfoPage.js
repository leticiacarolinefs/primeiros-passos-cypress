class MyInfoPage {

  selectorsList() {

    const selectors = {

      firstNameField: "[name='firstName']",
      middleNameField: "[name='middleName']",
      lastNameField: "[name='lastName']",
      genericField: ".oxd-input--active",
      dateField: "[placeholder='dd-mm-yyyy']",
      dropdownContainer: ".oxd-select-text",
      dropdownOption: ".oxd-select-option",
      dateCloseButton: ".--close",
      submiteButton: "[type='submit']",

    }

    return selectors

  }

  fillPersonalDetails(firstName, midleName, lastName) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstName)
    cy.get(this.selectorsList().middleNameField).clear().type(midleName)
    cy.get(this.selectorsList().lastNameField).clear().type(lastName)
  }

  fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, driversLicenseDate) {
    cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
    cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
    cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
    cy.get(this.selectorsList().dateField).eq(0).clear().type(driversLicenseDate)
    cy.get(this.selectorsList().dateCloseButton).click({ force: true })
  }

saveForm() {
  cy.get(this.selectorsList().submiteButton).eq(0).click({force: true})
  cy.get('body').should('contain', 'Successfully Updated')
  cy.get('.oxd-toast-close')
}

fillStatus() {
  // DROPDOWN DE NACIONALIDADE
    cy.get(this.selectorsList().dropdownContainer).eq(0)
      .should('be.visible')
      .click({ force: true })

    cy.get('.oxd-select-dropdown', { timeout: 10000 })
      .should('exist')
      .and('be.visible')

    cy.get(this.selectorsList().dropdownOption)
      .contains('Algerian')
      .click()

    // DROPDOWN DE MARITAL STATUS
    cy.get(this.selectorsList().dropdownContainer).eq(1)
      .should('be.visible')
      .click({ force: true })

    cy.get('.oxd-select-dropdown', { timeout: 10000 })
      .should('exist')
      .and('be.visible')

    cy.get(this.selectorsList().dropdownOption)
      .contains('Single')
      .click()
}


}


export default MyInfoPage