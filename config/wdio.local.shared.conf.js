
// process.env.NODE_DEBUG = "request";

exports.config = {
    // debug: true,
    // execArgv: ['--inspect=127.0.0.1:5859'],

    runner: 'local',
    // hostname: 'localhost', //this is implied
    port: 4723, // default Appium port
    specs: [
        './tests/*.ts'
    ],

    maxInstances: 5,
    logLevel: 'debug',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 0,
    services: [],
    framework: 'mocha',
    reporters: [
        'spec',
    ],
    
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 400000,
        compilers: ['ts:ts-node/register'], 
    },

    before: function (capabilities, specs) {
        require('ts-node').register({ files: true })
    },
}

