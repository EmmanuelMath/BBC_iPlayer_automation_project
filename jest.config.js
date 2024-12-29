/** @type {import('jest').Config} */
module.exports = {
  testMatch: [
    "**/step_definitions/**/*Steps.js"
  ],
  verbose: true,
  reporters: [
    "default",
    ["jest-html-reporter", {
      pageTitle: "Test Report",
      outputPath: "./test-report.html",
      includeFailureMsg: true,
      includeConsoleLog: true,
      sort: "status",
      darkTheme: true,
    }]
  ],
};