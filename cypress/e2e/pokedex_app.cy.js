/* global cy */
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:8080')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('navigate from the main page to the page of a particular Pokemon', function() {
    cy.visit('http://localhost:8080/pokemon/charizard')
    cy.contains('charizard')
    cy.contains('speed')
    cy.contains('solar power')
  })
})