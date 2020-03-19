const config = require('./wdio.local.shared.conf').config;

const baseCapabilityAndroid = {
    "appium:deviceName": "Android",
    "platformName": "Android",
    "browserName": "chrome",
    "appium:deviceOrientation": "portrait",
  }

config.capabilities = [
    baseCapabilityAndroid
]

config.specs = [
    './tests/*-web.ts'
]

exports.config = config