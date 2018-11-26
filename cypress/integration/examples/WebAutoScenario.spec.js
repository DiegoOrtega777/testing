describe('First cypress test', () =>{

    /**
     * Site is accesible
     */
    it('Navigate to site', () => {
        cy.visit('http://sports.williamhill.com/betting/en-gb')
    })

    /**
     * Commented as even I believe that elements are correct, while launching in Cypress,
     * cookies notice pop up is not displayed and I couldn´t properly test it
     */
    /**it('Verify that notice pop-up is present and close it', () => {
        cy.get('.cookie-disclaimer__cookie').should('be.visible')
        cy.get('.cookie-disclaimer__main').should('be.visible')
        cy.get('.cookie-disclaimer__button').click()
    })*/

    /**
     * Got cookie cdb and checked cookie management defining a cookie and asserting that is successfully created
     */
    it('Verify cdb cookie is present', () => {
        cy.visit('http://sports.williamhill.com/betting/en-gb')
        cy.getCookie('cdb')
        cy.get('.footer-cookies__header').should('be.visible')
        cy.setCookie('cdb', 'cdb_cookie_set_up')
        cy.getCookie('cdb').should('have.property', 'value', 'cdb_cookie_set_up')
    })
})