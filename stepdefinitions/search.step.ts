import { Given, Then, When } from "cucumber";
import { SearchPageObject } from '../pages/search.po';
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const searchPage = new SearchPageObject();

Given('Navigate to google home page', async () => {
    // Write code here that turns the phrase above into concrete actions
    searchPage.launchApplication('https://www.google.com/');
});

When('Type text {string} in search box', async (text: string) => {
    // Write code here that turns the phrase above into concrete actions
    searchPage.enterSearchText(text);
});

When('Click search button', async () => {
    // Write code here that turns the phrase above into concrete actions
    searchPage.clickOnSearchButton();
});

Then('Verify the title is {string}', async (title: string) => {
    // Write code here that turns the phrase above into concrete actions
    expect(searchPage.getTitle()).to.eventually.equal(title);
});