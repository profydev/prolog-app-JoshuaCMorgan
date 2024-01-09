import { version } from "../../package.json";

describe("Footer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("should render  application version from package.json", () => {
      cy.get("footer").contains(`Version: ${version}`);
    });

    it("should have functioning links", () => {
      // check we have 4 nav links
      cy.get('[data-cy="nav-links"]').find("li").should("have.length", 4);

      //   check that each desired nav link has proper text and leads to correct page
      cy.get('[data-cy="nav-links"]')
        .contains("Docs")
        .should("have.attr", "href", "/dashboard#");

      cy.get('[data-cy="nav-links"]')
        .contains("API")
        .should("have.attr", "href", "/dashboard#");

      cy.get('[data-cy="nav-links"]')
        .contains("Help")
        .should("have.attr", "href", "/dashboard#");

      cy.get('[data-cy="nav-links"]')
        .contains("Community")
        .should("have.attr", "href", "/dashboard#");
    });
  });
});
