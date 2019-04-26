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
const basePage_1 = require("./basePage");
const protractor_1 = require("protractor");
class loginPageObject extends basePage_1.BasePageObject {
    constructor() {
        super(...arguments);
        this.login_logo = 'android.widget.ImageView';
        this.login_txt = "com.jrs.ifactory:id/email";
        this.password_txt = "com.jrs.ifactory:id/password";
        this.signIn_btn = "com.jrs.ifactory:id/btn_login";
        this.allow_btn = "ALLOW";
        this.loginSuccesfully = (loginName, password) => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.xpath('(.//*[@class="' + this.login_logo + '"])[1]')).waitToBeCompletelyVisibleAndStable();
            yield protractor_1.element(protractor_1.by.xpath('.//*[@resource-id="' + this.login_txt + '"]')).waitToBeCompletelyVisibleAndStable();
            yield protractor_1.element(protractor_1.by.xpath('.//*[@resource-id="' + this.login_txt + '"]')).sendKeys(loginName);
            yield protractor_1.element(protractor_1.by.xpath('.//*[@resource-id="' + this.password_txt + '"]')).sendKeys(password);
            yield protractor_1.element(protractor_1.by.xpath('.//*[@resource-id="' + this.signIn_btn + '"]')).click();
        });
        this.allowPermission = () => __awaiter(this, void 0, void 0, function* () {
            var allow_btn_Var = protractor_1.element(protractor_1.by.xpath('.//*[@text="' + this.allow_btn + '"]'));
            if (yield allow_btn_Var.isPresentAndDisplayed()) {
                allow_btn_Var.click();
            }
        });
    }
}
exports.loginPageObject = loginPageObject;
