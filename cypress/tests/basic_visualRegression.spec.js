
describe('Visuals', () => {
    it('should compare screenshot from a given element', () => {
      cy.visit('www.google.com')
      cy.get('body img').compareSnapshot('google imgage')
    })
  })
