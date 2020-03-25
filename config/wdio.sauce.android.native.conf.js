const config = require('./wdio.sauce.shared.conf').config;
const cloneCapabilities = require("../utils")

const NUM_OF_INSTANCES = process.env.WDIO_CAP_MULTIPLIER || 1;
const baseCapabilityAndroid = {
    "platformName": "Android",
    "appium:deviceName": "Android GoogleAPI Emulator",
    "browserName": "",
    "platformVersion": "10.0",
    "appium:app": "sauce-storage:swag-labs.apk",
    "appium:deviceOrientation": "portrait",
    "appium:appWaitActivity": "com.swaglabsmobileapp.MainActivity",
    "sauce:options": {
            "appiumVersion": "1.16.0"
    }
  }

config.capabilities = cloneCapabilities(baseCapabilityAndroid, NUM_OF_INSTANCES)

config.specs = [
    './tests/*-native.ts'
]

exports.config = config