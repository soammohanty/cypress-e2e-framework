/**
 * @description: Examples of handling HTTP requests in Cypress
 * @author: Soam
 */


describe('Handling HTTP requests in Cypress', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests')
    })

    // Manage HTTP requests in your app

    it('make an XHR request', () => {

        cy.request('https://jsonplaceholder.cypress.io/comments')
            .should((response) => {
                expect(response.status).to.eq(200)
                // the server sometimes gets an extra comment posted from another machine
                // which gets returned as 1 extra object
                expect(response.body).to.have.property('length').and.be.oneOf([500, 501])
                expect(response).to.have.property('headers')
                expect(response).to.have.property('duration')
            })
    })

    it('verify response using BDD syntax', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments')
            .then((response) => {
                // https://on.cypress.io/assertions
                expect(response).property('status').to.equal(200)
                expect(response).property('body').to.have.property('length').and.be.oneOf([500, 501])
                expect(response).to.include.keys('headers', 'duration')
            })
    })

    it('cy.request() with query parameters', () => {
        // will execute request
        // https://jsonplaceholder.cypress.io/comments?postId=1&id=3
        cy.request({
                url: 'https://jsonplaceholder.cypress.io/comments',
                qs: {
                    postId: 1,
                    id: 3,
                },
            })
            .its('body')
            .should('be.an', 'array')
            .and('have.length', 1)
            .its('0') // yields first element of the array
            .should('contain', {
                postId: 1,
                id: 3,
            })
    })

})