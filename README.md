# GHK-E2E

## Basic protractor with cucumber

1. `npm install`

1. Add tsconfig.json

    ```json
    {
        "compilerOptions": {
            "module": "commonjs",
            "target": "es6",
            "moduleResolution": "node",
            "sourceMap": false,
            "declaration": false,
            "removeComments": false,
            "noImplicitAny": false,
            "skipLibCheck": true,
            "outDir": "dist"
        },
        "exclude": [
            "node_modules"
        ]
    }
    ```

1. Add config.ts
1. As we are using cucumber we need to specify `framework` and `frameworkPath` in config file.

    ```typescript
    import {Config} from 'protractor';

    export let config: Config = {
        seleniumAddress: 'http://localhost:4444/wd/hub',
        capabilities: {
            browserName: 'chrome'
        },
        // protractor intrenally uses jasmine, as we are using cucumber we need to mention the framework as custom
        framework: 'custom',
        // frameworkPath is the path to load the protractor-cucumber-framwork
        frameworkPath: require.resolve("protractor-cucumber-framework"),
        specs: [
            '../features/*.feature'
        ],
        cucumberOpts: {
            // cucumber need step definitions to excute the features so we need to specify the location for step defenitions
            require: ["./stepdefinitions/*.js"],
        }
    }
    ```

1. To perform enter key action in protractor use the bellow code

    ```typescript
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
    ```
