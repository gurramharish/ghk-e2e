import {Config} from 'protractor';

export let config: Config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'custom',
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: [
        '../features/*.feature'
    ],
    cucumberOpts: {
        // cucumber need step definitions to excute the features so we need to specify the location for step defenitions
        require: [
            "./stepdefinitions/*.js"
        ],
    }
}