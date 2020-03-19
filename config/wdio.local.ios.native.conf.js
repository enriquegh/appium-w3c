const config = require('./wdio.local.shared.conf').config;

const baseCapabilityIOS = {
  "appium:deviceName": "iPhone 8",
  "platformName": "iOS",
  "appium:platformVersion": "13.3",
  "appium:app": "/Users/enriquegonzalez/Desktop/SwagLabsMobileApp.zip",
  "appium:automationName": "XCUITest",
}

config.capabilities = [
  baseCapabilityIOS
]

config.specs = [
  './tests/*-native.ts'
]

exports.config = config