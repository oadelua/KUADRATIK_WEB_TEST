describe(' Kuadratik Web Test', () => {
  it('passes', () => {
    cy.visit('/')
    cy.wait (3000)
    cy.get ('.Nav_connect__VAgI0').click()
    cy.get(':nth-child(2) > input').click()
    cy.get(':nth-child(2) > input').type('Oluwatobi')
    cy.get(':nth-child(4) > input').click()
    cy.get(':nth-child(4) > input').type('oadelua@gmail.com')
    cy.get('textarea.connect_Iconinside__DyLxg').click()
    cy.get('textarea.connect_Iconinside__DyLxg').type('This is an automated message to Kuadratik using cypress. Please acknowledge receipt of email. Thank you!')
  })
})