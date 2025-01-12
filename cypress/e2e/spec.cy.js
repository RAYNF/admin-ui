describe("User access menu in dashboard view", () => {
  it("should display all menu items in the navbar and color diferent when menu clicked", () => {
    cy.viewport(1280, 800);

    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*****")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.url().should("include", "/");

    cy.get("nav").should("be.visible");

    cy.get("header").should("be.visible");

    cy.get("div").contains("Themes");

    const menus = [
      "Overview",
      "Balance",
      "Transaction",
      "Bills",
      "Expenses",
      "Goals",
      "Setting",
    ];

    menus.forEach((menu) => {
      cy.get("nav").contains(menu).should("be.visible");
    });

    cy.get("nav").contains("Overview").click();
    cy.url().should("include", "/");

    cy.get("nav").contains("Balance").click();
    cy.url().should("include", "/balance");

    cy.get("nav").contains("Goals").click();
    cy.url().should("include", "/goals");

    cy.get("nav").contains("Logout");

    cy.get("nav").contains("Overview").click();
    cy.get("nav")
      .contains("Overview")
      .should("have.class", "bg-primary")
      .and("have.class", "text-white");

    cy.get("nav").contains("Balance").click();
    cy.get("nav")
      .contains("Balance")
      .should("have.class", "bg-primary")
      .and("have.class", "text-white");
  });
});
