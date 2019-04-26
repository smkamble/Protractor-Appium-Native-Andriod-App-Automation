import { element, by, ElementFinder } from "protractor";
import { By } from "selenium-webdriver";

export class BasePageObject {
    public androidIDSelector = (selector: string): ElementFinder => {
        return element(by.xpath('.//[@resource-id="+selector+"]'));
    }

    public androidClassSelector = (selector: string): ElementFinder => {
        return element(By.xpath(".//[@className='" + selector + "']"));
    }


}