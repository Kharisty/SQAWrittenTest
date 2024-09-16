import { faker } from "@faker-js/faker";

let randomHP, randomEmail, randomFName, randomLName;

describe('registration page', () => {
  it('User success to filling all field at form register', () => {

    let randomNumeric = faker.string.numeric(8);
    randomHP = "0878" + randomNumeric;
    console.log(randomHP);

    let randomNumeric2 = faker.string.alphanumeric(6);
    randomEmail = "email" + randomNumeric2 + "@gmail.com";
    console.log(randomEmail);

    let randomString1 = faker.string.alpha(6);
    randomFName = "nmdepan" + randomString1;
    console.log(randomFName);

    let randomString2 = faker.string.alpha(6);
    randomLName = "nmbelakang" + randomString2;
    console.log(randomLName);

    cy.visit('https://www.cermati.com/app/gabung')
    cy.get("input[name='mobilePhone']").type(randomHP)
    cy.get("input[name='email']").type(randomEmail)
    cy.get("input[name='firstName']").type(randomFName)
    cy.get("input[name='lastName']").type(randomLName)
    cy.get('.btn-track').click()
    // cy.get('.<div class="recaptcha-checkbox-border" role="presentation"></div>').check()
    // cy.get("//*[@id='recaptcha-anchor']").click( {multiple: true})
    // cy.get('.btn-track').click()
    
  })
})