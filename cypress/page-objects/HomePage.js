class HomePage {

    getNameInputField() {
        return cy.get('.form-group [name="name"]');
    }

    getGenderField() {
        return cy.get('#exampleFormControlSelect1');
    }

    getTwoWayDataBindingField() {
        return cy.get('h4 input[name="name"]')
    }

    getRadioButton() {
        return cy.get('#inlineRadio3')
    }

    getShopTab() {
        return cy.contains('Shop');
    }
}

export default HomePage