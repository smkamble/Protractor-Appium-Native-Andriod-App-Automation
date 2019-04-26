import { loginPageObject } from "../pages/loginPage";
import { homePageObject } from "../pages/homePage";
import { browser} from 'protractor';

describe('Appium Demo', function () {
    const loginPage: loginPageObject = new loginPageObject();
    const homePage: homePageObject = new homePageObject();
    var data = require("../support/data.json");
    beforeAll(function () {
        console.log('Launch !!!!');
    });
    afterAll(function () {
        console.log('reseting !!!');
        browser.driver.resetApp();
        browser.driver.closeApp();
    });

    it("Login test", async function () {
        console.log("Inside method");
        await loginPage.loginSuccesfully(data.login.userName, data.login.password);
        await loginPage.allowPermission();
        await loginPage.allowPermission();
        browser.ignoreSynchronization=true;
        await homePage.closeFeatureInfo();
        await homePage.accountLabelDisplay();
        console.log("End of method")
    });
});
