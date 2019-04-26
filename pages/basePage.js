"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const selenium_webdriver_1 = require("selenium-webdriver");
class BasePageObject {
    constructor() {
        this.androidIDSelector = (selector) => {
            return protractor_1.element(protractor_1.by.xpath('.//[@resource-id="+selector+"]'));
        };
        this.androidClassSelector = (selector) => {
            return protractor_1.element(selenium_webdriver_1.By.xpath(".//[@className='" + selector + "']"));
        };
    }
}
exports.BasePageObject = BasePageObject;
