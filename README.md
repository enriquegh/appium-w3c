# appium-w3c

Repository with W3C tests running with Appium locally and on Sauce Labs

To install:
```bash
npm install
```

## Test Options

### Pre-requisites
Download and upload (if running on Sauce) the following apps or make sure to change the app capability:

[iOS](https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.1/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.1.1.zip)

[Android](https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.1/Android.SauceLabs.Mobile.Sample.app.2.2.1.apk)


### Local
The following tests can be run:


#### Run web and native W3C Android tests:
```bash
npm run android.local.native
npm run android.local.web
```

#### Run web and native W3C iOS tests:
```bash
npm run ios.local.native
npm run ios.local.web
```
NOTE: You might need to change the platformVersion or deviceName depending on what is installed on your machine.

### Sauce

#### Run web and native W3C Android tests:
```bash
npm run android.sauce.native
npm run android.sauce.web
```
NOTE: At the time of writing, Sauce Labs' Android 10 emulator has Chrome 74 which does not support `/actions` commands

#### Run web and native W3C iOS tests:
```bash
npm run ios.sauce.native
npm run ios.sauce.web
```