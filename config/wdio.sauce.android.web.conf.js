const config = require('./wdio.sauce.shared.conf').config;
const cloneCapabilities = require("../utils")

const NUM_OF_INSTANCES = process.env.WDIO_CAP_MULTIPLIER || 1;
const baseCapabilityAndroid = {
    "platformName": "Android",
    "appium:deviceName": "Android GoogleAPI Emulator",
    "browserName": "chrome",
    "platformVersion": "10.0",
    "appium:deviceOrientation": "portrait",
    "sauce:options": {
            "appiumVersion": "1.16.0"
    }
  }

config.capabilities = cloneCapabilities(baseCapabilityAndroid, NUM_OF_INSTANCES)

config.specs = [
    './tests/*-web.ts'
]

exports.config = config