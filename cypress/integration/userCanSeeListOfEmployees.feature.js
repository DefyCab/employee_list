/* eslint-disable no-undef */
describe("visiting the application, a user", () => {
  beforeEach(() => {
        cy.intercept('GET', "https://reqres.in/api/users**", {
        fixture: "userResponse.json",
    })
        cy.visit("/")   
    }) 
    
    it("is expected to see a header", () => {
        cy.get("h1").should("contain.text", "Employee List")
    })
  
    it("is expected to see 6 list items", () => {
        cy.get("[data-cy=employee-list").children().should("have.length", 6)
    })
})
