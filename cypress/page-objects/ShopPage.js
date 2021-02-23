class ShopPage {

    getProductNames() {
        return cy.get('h4.card-title');
    }

    getAddToCart() {
        return cy.get('.card-footer .btn');
    }

    getCheckoutButton() {
        return cy.contains('Checkout');
    }

    getCosts() {
        return cy.get('tr td:nth-child(4) strong');
    }

    getTotalCost() {
        return cy.get('h3 strong');
    }

    getFinalCheckoutButton() {
        return cy.get('button.btn-success');
    }

    getLocationField() {
        return cy.get('#country');
    }

    getLocationSuggestion() {
        return cy.get('.suggestions a');
    }

    getTermsCheckbox() {
        return cy.get('label[for="checkbox2"]');
    }

    getPurchaseButton() {
        return cy.get('[value="Purchase"]');
    }

    getSuccessMessage() {
        return cy.get('div.alert-success');
    }
}
export default ShopPage