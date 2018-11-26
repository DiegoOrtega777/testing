describe('First cypress test', () =>{

    /**
     * Access to the site
     */
    it('Navigate to site', () => {
        cy.visit('http://sports.williamhill.com/betting/en-gb')
    })

    /**
     * Join button accessible from the site
     */
    it('Verify join button is present', () => {
        cy.get('#joinLink').should('be.visible')
    })

    /**
     * Switch language to German
     */
    it('Switch language to German', () => {
        cy.get('.languageSelectionToggle').click()
        cy.get('div > ul > :nth-child(3) > #de').click()
    })

    /**
     * Verify that Join button is correctly displayed in the site when language selected is German
     */
     it('Join button is present in German language', () => {
        cy.get('.languageSelectionToggle').click()
        cy.get('div > ul > :nth-child(3) > #de').click()
        cy.get('#joinLink').should('be.visible')
     })

    /**
     * Join button text is correctly translated in German language
     */
     it('Join button is translated into German language', () => {
        cy.get('.languageSelectionToggle').click()
        cy.get('div > ul > :nth-child(3) > #de').click()
        cy.get('#joinLink').should('be.visible')
        //expect(cy.get('#joinLink')).contain('Almenden')
        cy.get('#joinLink').invoke('text').then((text) => {
            expect(text.trim()).equal('Anmelden')
        });
     })

    /**
     * Japanese site is accessible, with Join button displayed with the text properly translated
     */
     it('Selected Japanese language and verified Join button translation', () => {
        cy.get('.languageSelectionToggle').click()
        cy.get('div > ul > :nth-child(19)').click()
        cy.get('#joinLink').should('be.visible')
        cy.get('#joinLink').invoke('text').then((text) => {
          expect(text.trim()).equal('登録')
        });
     })

    /**
     * Greek site is accessible, with Join button displayed with the text properly translated
     */
     it('Selected Greek language and verified Join button translation', () => {
        cy.get('.languageSelectionToggle').click()
        cy.get('div > ul > :nth-child(17) > #el').click()
        cy.get('#joinLink').should('be.visible')
        cy.get('#joinLink').invoke('text').then((text) => {
          expect(text.trim()).equal('Εγγραφή')
        });
      })
})