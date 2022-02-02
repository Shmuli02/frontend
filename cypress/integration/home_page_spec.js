describe('Initial test', () => {
  it('successfully loads', () => {
    cy.visit("/hylyt")
    cy.get('h1').should('contain', 'Hylkysukellusilmoituspalvelu');
  });
});
  
describe('Test form', () => {
  it('user has to fill in their name', () => {
    cy.get('.btn').click();
    cy.get('[id=newname]').then($x => expect($x[0].checkValidity()).to.be.false);
  });

  it('user has to fill in their phone number', () => {
    cy.get('[id=newname]').type('Test Tester');
    cy.get('.btn').click();
    cy.get('[id=newphone]').then($x => expect($x[0].checkValidity()).to.be.false);
  });

  it('user can make make a notice', () => {
    cy.get('[id=newname]').type('Test Tester');
    cy.get('[id=newphone]').type('0000000000');
    cy.get('.btn').click();
  });

  it('locationid is empty before clicked a row', () => {
    cy.get('[id=newlocationid]').should('have.value', '')
  });

  it('locationname is not empty when clicked a row', () => {
    cy.scrollTo('top')
    cy.wait(2000)
    cy.get('tbody').find('tr').first().click();
    cy.get('[id=newlocationname]').should('not.have.value', '')
  });

  it('locationid is not empty when clicked a row', () => {
    cy.scrollTo('top')
    cy.wait(2000)
    cy.get('tbody').find('tr').first().click();
    cy.get('[id=newlocationid]').should('not.have.value', '')
  });

  it('locationname cannot be modified by typing', () => {
    cy.get('[id=newlocationname]').type('Wreck 2', { force: true })
    cy.get('[id=newlocationname]').should('not.have.value', 'Wreck 2')
  });

  it('locationid cannot be modified by typing', () => {
    cy.get('[id=newlocationid]').type('000000', { force: true })
    cy.get('[id=newlocationid]').should('not.have.value', '000000')
  });
})
