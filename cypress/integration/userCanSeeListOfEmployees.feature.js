/* eslint-disable no-undef */
describe("Visiting the application, a user", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://reqres.in/api/users**", {
      fixture: "userResponse.json",
    }).as("fetchData");
    cy.visit("/");
  });

  it("is expected to see a header", () => {
    cy.get("[data-cy=employee-header]").should("contain.text", "Employee List");
  });

  it("is expected to return an array od data", () => {
    cy.wait("@fetchData").its("response.body.data").should("be.an", "array");
  });

  it("is expected to see 5 list items", () => {
    cy.get("[data-cy=employee-list]").children().should("have.length", 5);
  });

  describe("can see a list of employees", () => {
    it("is expected to see first employee", () => {
      cy.get("#1").within(() => {
        cy.get(".image").should("exist");
        cy.get(".header").should("exist");
        cy.get(".description").should("contain", "george.bluth@reqres.in");
      });
    });

    it("is expected to see second employee", () => {
      cy.get("#2").within(() => {
        cy.get(".image").should("exist");
        cy.get(".header").should("contain", "Anna Klavina");
        cy.get(".description").should("contain", "janet.weaver@reqres.in");
      });
    });

    it("is expected to see third employee", () => {
      cy.get("#3").within(() => {
        cy.get(".image").should("exist");
        cy.get(".header").should("contain", "John Something");
        cy.get(".description").should("contain", "emma.wong@reqres.in");
      });
    });

    it("is expected to see third employee", () => {
      cy.get("#4").within(() => {
        cy.get(".image").should("exist");
        cy.get(".header").should("contain", "Ieva Voilaa");
        cy.get(".description").should("contain", "eve.holt@reqres.in");
      });
    });

    it("is expected to see fifth employee", () => {
      cy.get("#5").within(() => {
        cy.get(".image").should("exist");
        cy.get(".header").should("contain", "Charles Morris");
        cy.get(".description").should("contain", "charles.morris@reqres.in");
      });
    });
  });
});