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
class homePageObject extends basePage_1.BasePageObject {
    constructor() {
        super(...arguments);
        this.closeInfo_icon = 'com.jrs.ifactory:id/btnClose';
        this.account_lbl = "Account";
        this.closeFeatureInfo = () => __awaiter(this, void 0, void 0, function* () {
            var close_Info_Var = protractor_1.element(protractor_1.by.xpath('.//*[@text="' + this.closeInfo_icon + '"]'));
            if (yield close_Info_Var.isPresentAndDisplayed()) {
                close_Info_Var.waitToBeCompletelyVisibleAndStable();
                close_Info_Var.click();
            }
        });
        this.accountLabelDisplay = () => __awaiter(this, void 0, void 0, function* () {
            var account_lbl_Var = protractor_1.element(protractor_1.by.xpath('.//*[@text="' + this.account_lbl + '"]'));
            if (yield account_lbl_Var.isPresentAndDisplayed()) {
                account_lbl_Var.waitToBeCompletelyVisibleAndStable();
                console.log("Navigated to Home Page");
            }
        });
    }
}
exports.homePageObject = homePageObject;
