import capitalize from "lodash/capitalize";
import mockProjects from "../fixtures/projects.json";
import { ProjectStatus } from "@api/projects.types";
/*
-- spying and response stubbing
--staticResponse is always last argument
cy.intercept(url, staticResponse)
cy.intercept(method, url, staticResponse)
cy.intercept(routeMatcher, staticResponse)
cy.intercept(url, routeMatcher, staticResponse)

-- spying, dynamic stubbing, request modification, etc.
cy.intercept(url, routeHandler)
cy.intercept(method, url, routeHandler)
cy.intercept(routeMatcher, routeHandler)
cy.intercept(url, routeMatcher, routeHandler)
*/
describe("Project List", () => {
  // context("request failure", () => {
  //   it("renders an error notification containing a message and reload button", () => {
  //     // Cypress will retry multiple times if there is a network error
  //     cy.intercept(
  //       { url: "https://prolog-api.profy.dev/project", times: 4 },
  //       {
  //         fixture: "projects.json",
  //         forceNetworkError: true,
  //         // retryOnNetworkFailure: false,
  //       },
  //     );

  //     cy.visit("http://localhost:3000/dashboard");

  //     // wait for React Query 3x retries
  //     cy.get('[data-cy="alert-error"]', { timeout: 15000 }).should(
  //       "be.visible",
  //     );
  //   });

  //   it("reload after clicking 'try again' button will show project list of 3 items", () => {
  //     cy.intercept(
  //       { url: "https://prolog-api.profy.dev/project", times: 4 },
  //       {
  //         fixture: "projects.json",
  //         forceNetworkError: true,
  //         // retryOnNetworkFailure: false,
  //       },
  //     );

  //     cy.visit("http://localhost:3000/dashboard");

  //     // Find button and reload the page
  //     cy.get('[data-cy="alert-error"]', { timeout: 15000 })
  //       .find("button")
  //       .click();

  //     cy.get("main").find("li").should("have.length", 3);
  //   });
  // });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
      // setup request mock
      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        fixture: "projects.json",
      }).as("getProjects");

      // open projects page
      cy.visit("http://localhost:3000/dashboard");

      // wait for request to resolve
      cy.wait("@getProjects");
    });

    it("renders a loading spinner", () => {
      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        delayMs: 100,
        fixture: "projects.json",
      });

      cy.visit(`http://localhost:3000/dashboard`);

      cy.get('[data-cy="loading"]').should("be.visible");
      cy.get('[data-cy="loading"]').should("not.exist");
    });
    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];
      const statusTexts: { [index: string]: string } = {
        [ProjectStatus.info]: "stable",
        [ProjectStatus.warning]: "warning",
        [ProjectStatus.error]: "critical",
      };
      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          const status = mockProjects[index].status;
          cy.wrap($el).contains(capitalize(statusTexts[status]));
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });

    it("provides each project status with its appropriate color", () => {
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          const statusColors: { [index: string]: string } = {
            [ProjectStatus.info]: "rgb(2, 122, 72)",
            [ProjectStatus.warning]: "rgb(181, 71, 8)",
            [ProjectStatus.error]: "rgb(180, 35, 24)",
          };
          // get element
          const element = cy.wrap($el).find("div[class^='badge_container']");
          // get status
          const status = mockProjects[index].status;
          // check proper color for status

          element.should("have.css", "color", statusColors[status]);
        });
    });

    it("provides appropriate text for each project status", () => {
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          const statusTexts: { [index: string]: string } = {
            [ProjectStatus.info]: "stable",
            [ProjectStatus.warning]: "warning",
            [ProjectStatus.error]: "critical",
          };
          // get element
          const element = cy.wrap($el).find("div[class^='badge_container']");
          // get status
          const status = mockProjects[index].status;
          // check proper text for status
          element.invoke("text").should("eq", capitalize(statusTexts[status]));
        });
    });
  });
});
