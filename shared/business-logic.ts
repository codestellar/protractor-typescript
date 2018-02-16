import { browser } from "protractor";

export class BusinessLogic{

    testCodestellar(): string{
        browser.ignoreSynchronization = false;
        browser.waitForAngularEnabled(false);                 
        browser.driver.get('http://codestellar.net/');     
        if(expect(browser.getTitle()).toContain('Codestellar.Net')){
            return 'Test ran successfully';
        }

        return 'Not run';
    }
}