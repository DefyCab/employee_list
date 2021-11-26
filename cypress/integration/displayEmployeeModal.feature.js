/* eslint-disable no-undef */
describe("Display of employee modal", () => {
    beforeEach(() => {
      cy.intercept("GET", "https://reqres.in/api/users/1**", {
        fixture: "userResponse.json",
      }).as("fetchData");
      cy.visit("/");
      cy.get("[data-cy=employee-list]").within(() => {
        cy.get("#1").find(".view-button").click();
      });
    });
  
    it("is expected to open when view button is clicked", () => {
      cy.get("[data-cy=modal-container]").should("be.visible");
    });
  
    it("is expected to contain infomation about employee", () => {
      cy.get("[data-cy=modal-container]").within(() => {
        cy.get(".image").should("exist");
        cy.get(".header").should("exist");
        cy.get(".email").should("contain", "george.bluth@reqres.in");
      });
    });
  });