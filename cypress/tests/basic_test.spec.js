/**
 * @description: A basic e2e cypress test
 * @author: Soam
 */

import HomePage from '../page-objects/HomePage'
import ShopPage from '../page-objects/ShopPage'

describe('Basic e2e cypress test', function () {

    const homePage = new HomePage();
    const shopPage = new ShopPage();

    const name = 'John Wick';
    const gender = 'Male';
    const smartphoneNames = ['iphone X', 'Samsung Note 8'];
    const country = 'India'

    before(function () {

        //Visit the site
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
    })

    it('checkout all the smartphones', function () {

        //Enter Name
        homePage.getNameInputField().type(name);

        //Enter Gender
        homePage.getGenderField().select(gender);

        //Assert the value in the 2nd input field
        homePage.getTwoWayDataBindingField().should('have.value', name);

        //Assert the min-length of the input
        homePage.getNameInputField().should('have.attr', 'minlength', '2');

        //Assert one radio button is disabled
        homePage.getRadioButton().should('have.attr', 'disabled');
        homePage.getRadioButton().should('be.disabled');

        //Click on Shop
        homePage.getShopTab().click();

        //Get the cost of blackberry and add to cart
        shopPage.getProductNames().each(($el, index, $list) => {
            if ($el.text().includes('Blackberry')) {
                shopPage.getProductNames().eq(index).next().then(($cost) => {
                    cy.log($cost.text())
                })
                shopPage.getAddToCart().eq(index).click();
            }
        })

        //Add to cart using custom command
        cy.selectSmartPhone('Nokia Edge')


        //Add to cart using fixture data array
        smartphoneNames.forEach(productName => {
            cy.selectSmartPhone(productName)
        });

        // Go to checkout page
        shopPage.getCheckoutButton().click();

        let totalCost = 0
        shopPage.getCosts().each(($cost) => {
            totalCost += parseInt($cost.text().match(/\d+/));
        })

        //Assert the total cost
        shopPage.getTotalCost().invoke('text').then(($sum) => {
            expect(parseInt($sum.match(/\d+/))).to.equal(totalCost);
        });

        //Checkout
        shopPage.getFinalCheckoutButton().click();

        //Enter country 
        shopPage.getLocationField().type(country);

        shopPage.getLocationSuggestion().click();

        //Check the terms checkbox and purchase
        shopPage.getTermsCheckbox().click({
            force: true
        });
        shopPage.getPurchaseButton().click();

        //Assert the sucess page
        shopPage.getSuccessMessage().invoke('text').should('contain', ' Thank you! Your order will be delivered in next few weeks :-)');

    })
})