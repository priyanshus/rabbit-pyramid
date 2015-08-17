exports.config = {
  allScriptsTimeout: 11000,
  directConnect: true,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'firefox'
  },

  baseUrl: 'http://localhost:8000',

  framework: 'mocha',

  mochaOpts: {
  reporter: "spec",
  timeout: 30000,
  slow: 3000
}
};
