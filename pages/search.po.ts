import { $, browser, ElementFinder } from "protractor";
import { protractor } from "protractor/built/ptor";

export class SearchPageObject {

    public searchTextBox: ElementFinder;
    public searchButton: ElementFinder;
    public logo: ElementFinder;

    constructor() {
        this.searchTextBox = $("input[title='Search']");
        this.searchButton = $("input[value='Google Search']");
        this.logo = $("div.logo img");
    }

    public async launchApplication(url: string): Promise<void> {
        await browser.get(url);
    }

    public async getTitle(): Promise<string> {
        return await browser.getTitle();
    }

    public async enterSearchText(text: string) {
        await this.searchTextBox.sendKeys(text);
    }

    public async clickOnSearchButton() {
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }
}