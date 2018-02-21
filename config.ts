import { ProtractorBrowser, Config } from 'protractor';

export let config: Config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
    },
  framework: 'jasmine',
  specs: ['./specs/**/*.js'],
  // specs: ['./specs/second.spec.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 90000
  },
  onPrepare: () => {
   let globals = require('protractor');   
   let browser = globals.browser;
   browser.manage().window().maximize();
   browser.manage().timeouts().implicitlyWait(5000);
 
   // Reports Configuration
   let HtmlReporter = require('protractor-beautiful-reporter');
   let path = require('path');

   jasmine.getEnv().addReporter(new HtmlReporter({
    baseDirectory: 'test-report'
    , screenshotsSubfolder: 'images'
    , jsonsSubfolder: 'jsons'
    , docTitle: 'Technossus\' Analysis...'
    , preserve: false
    , excludeSkippedSpecs: true
    , takeScreenShotsForSkippedSpecs: false
    , docName: 'tss-report.html'
    , cssOverrideFile: 'css/style.css'
   }).getJasmine2Reporter());
 
  }
}