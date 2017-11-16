import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';
describe('Technossus website', function () { //Suite in Jasmine
    it('should have Technossus in title', function () { // Test in Jasmine

        browser.ignoreSynchronization = false;
        browser.waitForAngularEnabled(false);                
        
        browser.driver.get('http://angularjs.org/');     
        expect(browser.getTitle()).toContain('AngularJS');      

    });
});