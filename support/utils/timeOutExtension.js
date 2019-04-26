let runner = require('../../node_modules/protractor/built/runner');
const browser_1 = require("../../node_modules/protractor/built/browser");

(function(){
    runner.Runner.prototype.createBrowser = function(plugins, parentBrowser){
        let config = this.config_;
        let driver = this.driverprovider_.getNewDriver();
        let blockingProxyUrl;
        if (config.useBlockingProxy) {
            blockingProxyUrl = this.driverprovider_.getBPUrl();
        }
        let initProperties = {
            baseUrl: config.baseUrl,
            rootElement: config.rootElement,
            untrackOutstandingTimeouts: config.untrackOutstandingTimeouts,
            params: config.params,
            getPageTimeout: config.getPageTimeout,
            allScriptsTimeout: config.allScriptsTimeout,
            debuggerServerPort: config.debuggerServerPort,
            ng12Hybrid: config.ng12Hybrid,
            waitForAngularEnabled: true
        };
        if (parentBrowser) {
            initProperties.baseUrl = parentBrowser.baseUrl;
            initProperties.rootElement = parentBrowser.angularAppRoot();
            initProperties.untrackOutstandingTimeouts = !parentBrowser.trackOutstandingTimeouts_;
            initProperties.params = parentBrowser.params;
            initProperties.getPageTimeout = parentBrowser.getPageTimeout;
            initProperties.allScriptsTimeout = parentBrowser.allScriptsTimeout;
            initProperties.debuggerServerPort = parentBrowser.debuggerServerPort;
            initProperties.ng12Hybrid = parentBrowser.ng12Hybrid;
            initProperties.waitForAngularEnabled = parentBrowser.waitForAngularEnabled();
        }
        let browser_ = new browser_1.ProtractorBrowser(driver, initProperties.baseUrl, initProperties.rootElement, initProperties.untrackOutstandingTimeouts, blockingProxyUrl);
        browser_.params = initProperties.params;
        browser_.plugins_ = plugins || new plugins_1.Plugins({});
        if (initProperties.getPageTimeout) {
            browser_.getPageTimeout = initProperties.getPageTimeout;
        }
        if (initProperties.allScriptsTimeout) {
            browser_.allScriptsTimeout = initProperties.allScriptsTimeout;
        }
        if (initProperties.debuggerServerPort) {
            browser_.debuggerServerPort = initProperties.debuggerServerPort;
        }
        if (initProperties.ng12Hybrid) {
            browser_.ng12Hybrid = initProperties.ng12Hybrid;
        }
        browser_.ready =
            browser_.ready
                .then(() => {
                    return browser_.waitForAngularEnabled(initProperties.waitForAngularEnabled);
                })
                .then(() => {
                    return driver.manage().timeouts().setScriptTimeout(initProperties.allScriptsTimeout)
                        .then(null, function (e) {
                            console.log('scriptTimeOut was not set up');
                        });
                })
                .then(() => {
                    return browser_;
                });
        browser_.getProcessedConfig = () => {
            return selenium_webdriver_1.promise.when(config);
        };
        browser_.forkNewDriverInstance =
            (useSameUrl, copyMockModules, copyConfigUpdates = true) => {
                let newBrowser = this.createBrowser(plugins);
                if (copyMockModules) {
                    newBrowser.mockModules_ = browser_.mockModules_;
                }
                if (useSameUrl) {
                    newBrowser.ready = newBrowser.ready
                        .then(() => {
                            return browser_.driver.getCurrentUrl();
                        })
                        .then((url) => {
                            return newBrowser.get(url);
                        })
                        .then(() => {
                            return newBrowser;
                        });
                }
                return newBrowser;
            };
        let replaceBrowser = () => {
            let newBrowser = browser_.forkNewDriverInstance(false, true);
            if (browser_ === ptor_1.protractor.browser) {
                this.setupGlobals_(newBrowser);
            }
            return newBrowser;
        };
        browser_.restart = () => {
            // Note: because tests are not paused at this point, any async
            // calls here are not guaranteed to complete before the tests resume.
            // Seperate solutions depending on if the control flow is enabled (see lib/browser.ts)
            if (browser_.controlFlowIsEnabled()) {
                return browser_.restartSync().ready;
            }
            else {
                return this.driverprovider_.quitDriver(browser_.driver)
                    .then(replaceBrowser)
                    .then(newBrowser => newBrowser.ready);
            }
        };
        browser_.restartSync = () => {
            if (!browser_.controlFlowIsEnabled()) {
                throw TypeError('Unable to use `browser.restartSync()` when the control flow is disabled');
            }
            this.driverprovider_.quitDriver(browser_.driver);
            return replaceBrowser();
        };
        return browser_;
    }
})();