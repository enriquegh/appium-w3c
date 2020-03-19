const config = require('./wdio.local.shared.conf').config;

const baseCapabilityIOS = {
  "appium:deviceName": "iPhone 8",
  "platformName": "iOS",
  "appium:platformVersion": "13.3",
  "browserName": "safari",
  "appium:automationName": "XCUITest",
}

config.capabilities = [
  baseCapabilityIOS
]

config.specs = [
  './tests/*-web.ts'
]

exports.config = config