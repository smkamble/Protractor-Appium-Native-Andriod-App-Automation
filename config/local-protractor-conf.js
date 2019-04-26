
const jasmineReporters = require('jasmine-reporters');

exports.config = {

    plugins: [
        {path: '../support/utils/protractorExtensions.js'},
        {path: '../support/utils/timeOutExtension.js'}
    ],

    seleniumAddress: 'http://localhost:4723/wd/hub',
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        browserName: '',
        // 'appium-version': '1.7.1',
        platformName: 'Android',
        //platformVersion: '9.0',
        deviceName: 'Android Emulator',
        appWaitPackage: 'com.jrs.ifactory',
        appWaitActivity: 'com.jrs.ifactory.login.LoginActivity',
        scriptTimeOut:20000,
        // automationName: 'selendroid',
        // automationName: 'UIAutomator2',
        // autoWebView: true,
        // clearSystemFiles: true,
        //fullReset: true,
        newCommandTimeout: '10000',
        app: 'C:/Users/p10486358/Downloads/prot-appium-new/prot-appium-Final_iFactory/apk/iFactory_Industrial_Asset_Inspection_Maintenance.apk'
    },

    // baseUrl: 'https://staging.perchwell.com/',

    // params: env[process.env.ENVIRONMENT].params,

    // directConnect: true,

    specs: ['../stepDefinitions/loginSpecs.js'],

    // restartBrowserBetweenTests: true,

    // beforeLaunch: function() {
    // },

    onPrepare: function () {
        jasmine.getEnv().addReporter(new jasmineReporters.TapReporter());
        browser.ignoreSynchronization = true;
    },


    ignoreUncaughtExceptions: true,

    framework: 'jasmine2',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 1200000
    },

    allScriptsTimeout: 12000
};