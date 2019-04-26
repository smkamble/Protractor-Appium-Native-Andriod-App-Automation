import { BasePageObject } from "./basePage";
import { element, by, browser, protractor } from "protractor";
export class homePageObject extends BasePageObject {
   
    
    public closeInfo_icon: string = 'com.jrs.ifactory:id/btnClose';
    public account_lbl: string = "Account";

    public closeFeatureInfo=async ()=>{
        var close_Info_Var=element(by.xpath('.//*[@text="'+this.closeInfo_icon+'"]'));
        await close_Info_Var.waitForAppeared();
        if(await close_Info_Var.isPresentAndDisplayed()){
            
            close_Info_Var.click();
        }
    }
    public accountLabelDisplay=async()=>{
        var account_lbl_Var=element(by.xpath('.//*[@text="'+this.account_lbl+'"]'));
        await account_lbl_Var.waitReady(3000);
        if(await account_lbl_Var.isPresentAndDisplayed()){
            
            console.log("Navigated to Home Page")
        }
    }
}