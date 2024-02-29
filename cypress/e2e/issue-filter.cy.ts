describe("Issue Filter", () => {
  beforeEach(() => {
    // setup request mocks
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");
    cy.intercept("GET", "https://prolog-api.profy.dev/issue?page=1", {
      fixture: "issues-page-1.json",
    }).as("getIssuesPage1");
    cy.intercept(
      "GET",
      "https://prolog-api.profy.dev/issue?page=2&status=&level=&project=",
      {
        fixture: "issues-page-2.json",
      },
    ).as("getIssuesPage2");
    cy.intercept(
      "GET",
      "https://prolog-api.profy.dev/issue?page=3&status=&level=&project=",
      {
        fixture: "issues-page-3.json",
      },
    ).as("getIssuesPage3");

    // open issues page
    cy.visit(`http://localhost:3000/dashboard/issues`);

    // wait for request to resolve
    cy.wait(["@getProjects", "@getIssuesPage1"]);
    cy.wait(1000);
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1440, 1080);
    });

    it("renders the filters", () => {
      /* parent container exists */
      cy.get("[data-cy='issue-filter-container']").should("exist");

      /* filters exists */
      cy.get("[data-cy='issue-filters']").should("exist");

      /* filters  contains 3 elements */
      cy.get("[data-cy='issue-filters']").children().should("have.length", 3);
    });

    function openStatusOption() {
      cy.get("[data-cy='issue-filters'] div:first").click().wait(150);
    }

    function openLevelOption() {
      cy.get("[data-cy='issue-filters'] div:first").next().click().wait(150);
    }

    it("returns appropriate params for each Status filter selection", () => {
      const statusParams = [
        ["Unresolved", "status=open"],
        ["Resolved", "status=resolved"],
        ["Status", "status="],
      ];

      statusParams.forEach((status) => {
        openStatusOption();
        cy.get("[data-cy='issue-filters'] div:first")
          .contains(status[0])
          .click()
          .wait(150)
          .url()
          .should("contain", status[1]);
      });
    });

    it("returns appropriate params for each Status filter selection", () => {
      const levelParams = [
        ["Error", "level=error"],
        ["Warning", "level=warning"],
        ["Info", "level=info"],
        ["Level", "level="],
      ];

      levelParams.forEach((status) => {
        openLevelOption();
        cy.get("[data-cy='issue-filters'] div:first")
          .next()
          .contains(status[0])
          .click()
          .wait(150)
          .url()
          .should("contain", status[1]);
      });
    });

    it("displays on first page only those issues matching chosen level of 'error' ", () => {
      openLevelOption();
      cy.get("[data-cy='issue-filters'] div:first")
        .next()
        .contains("Error")
        .click()
        .wait(150);

      cy.get("main")
        .find("tbody")
        .find("tr")
        .each(($el) => {
          cy.wrap($el).contains("Error");
        });
    });

    it("displays on the first page only those issues matching chosen level of 'warning' ", () => {
      openLevelOption();
      cy.get("[data-cy='issue-filters'] div:first")
        .next()
        .contains("Warning")
        .click()
        .wait(150);

      cy.get("main")
        .find("tbody")
        .find("tr")
        .each(($el) => {
          cy.wrap($el).contains("Warning");
        });
    });

    it("displays on the first page only those issues matching chosen level of 'info' ", () => {
      openLevelOption();
      cy.get("[data-cy='issue-filters'] div:first")
        .next()
        .contains("Info")
        .click()
        .wait(150);

      cy.get("main")
        .find("tbody")
        .find("tr")
        .each(($el) => {
          cy.wrap($el).contains("Info");
        });
    });
  });
});
