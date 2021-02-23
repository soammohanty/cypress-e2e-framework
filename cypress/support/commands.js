Cypress.Commands.add("selectSmartPhone", (productName) => {
    cy.get('h4.card-title').each(($el, index, $list) => {
        if ($el.text().includes(productName)) {
            cy.get('.card-footer .btn').eq(index).click();
        }
    })
})

const compareSnapshotCommand = require('../../node_modules/cypress-visual-regression/dist/command');

compareSnapshotCommand();