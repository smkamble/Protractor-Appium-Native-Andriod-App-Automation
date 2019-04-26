import { BasePageObject } from "./basePage";
import { element, by } from "protractor";

export class loginPageObject extends BasePageObject {
    public login_logo: string = 'android.widget.ImageView';
    public login_txt: string = "com.jrs.ifactory:id/email";
    public password_txt:string="com.jrs.ifactory:id/password";
    public signIn_btn:string="com.jrs.ifactory:id/btn_login";
    public allow_btn:string="ALLOW"

    public loginSuccesfully=async (loginName:string, password:string)=>{
        await element(by.xpath('(.//*[@class="'+this.login_logo+'"])[1]')).waitToBeCompletelyVisibleAndStable();
        await element(by.xpath('.//*[@resource-id="'+this.login_txt+'"]')).waitToBeCompletelyVisibleAndStable();
        await element(by.xpath('.//*[@resource-id="'+this.login_txt+'"]')).sendKeys(loginName);
        await element(by.xpath('.//*[@resource-id="'+this.password_txt+'"]')).sendKeys(password);
        await element(by.xpath('.//*[@resource-id="'+this.signIn_btn+'"]')).click();
    }
    public allowPermission=async()=>{
        var allow_btn_Var=element(by.xpath('.//*[@text="'+this.allow_btn+'"]'));
        if(await allow_btn_Var.isPresentAndDisplayed()){
            allow_btn_Var.click();
        }
    }
}