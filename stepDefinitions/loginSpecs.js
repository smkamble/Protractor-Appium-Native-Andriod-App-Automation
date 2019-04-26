"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const loginPage_1 = require("../pages/loginPage");
const homePage_1 = require("../pages/homePage");
const protractor_1 = require("protractor");
describe('Appium Demo', function () {
    const loginPage = new loginPage_1.loginPageObject();
    const homePage = new homePage_1.homePageObject();
    var data = require("../support/data.json");
    beforeAll(function () {
        console.log('Launch !!!!');
    });
    afterAll(function () {
        console.log('reseting !!!');
        protractor_1.browser.driver.resetApp();
        protractor_1.browser.driver.closeApp();
    });
    it("Login test", function () {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Inside method");
            yield loginPage.loginSuccesfully(data.login.userName, data.login.password);
            yield loginPage.allowPermission();
            yield loginPage.allowPermission();
            yield homePage.closeFeatureInfo();
            yield homePage.accountLabelDisplay();
        });
    });
});
