
describe('Visuals', () => {
    it('should compare screenshot from a given element', () => {
      cy.visit('www.google.com')
      //cy.wait(30000)
      cy.get('body img').compareSnapshot('google imgagaaaaa')

     //cy.compareSnapshot('google imgagaaaaa', 0.0);
    })
  })

  //https://assets.inshorts.com/website_assets/images/logo_inshorts.png