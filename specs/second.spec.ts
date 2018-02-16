import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';
import { BusinessLogic } from '../shared/business-logic';


describe('Codestellar website', function () { //Suite in Jasmine
    it('should have Codestellar in title', function () { // Test in Jasmine

        let obj = new BusinessLogic();
        let result = obj.testCodestellar();
        console.log(result);

    });
});