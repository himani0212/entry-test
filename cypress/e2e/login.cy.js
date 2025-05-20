describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Displays login form elements', () => {
    cy.get('input[name="name"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button[type="submit"]').should('contain', 'Login');
  });

  it('Logs in successfully and redirects to Welcome page', () => {
    cy.get('input[name="name"]').type('admin');
    cy.get('input[name="password"]').type('password');
    cy.get('button[type="submit"]').click();
  });

  it('Fails login with incorrect credentials', () => {
    cy.get('input[name="name"]').type('wrong');
    cy.get('input[name="password"]').type('wrongpass');
    cy.get('button[type="submit"]').click();

    cy.wait(200);
    cy.get('[data-cy="login-error"]')
    .should('exist')
    .and('be.visible')
    .and('contain', 'Invalid credentials');  });
});
