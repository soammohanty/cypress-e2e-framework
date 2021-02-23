class ActionsPage{

    getEmailField(){
        return cy.get('.action-email');
    }

    getDisabledField(){
        return cy.get('.action-disabled');
    }

    getFocusField(){
        return cy.get('.action-focus');
    }

    getClearField(){
        return cy.get('.action-clear');
    }

    getActionButton(){
        return cy.get('.action-btn')
    }
}
export default ActionsPage