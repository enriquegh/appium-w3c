const config = require('./wdio.local.shared.conf').config;

const baseCapabilityAndroid = {
    "appium:deviceName": "Android",
    "platformName": "Android",
    "appium:app": "/Users/enriquegonzalez/saucelabs/apps/Android/Android.SauceLabs.Mobile.Sample.app.2.2.1.apk",
    "appium:deviceOrientation": "portrait",
    "appium:appWaitActivity": "com.swaglabsmobileapp.MainActivity"
  }

config.capabilities = [
    baseCapabilityAndroid
]

config.specs = [
    './tests/*-native.ts'
]

exports.config = config