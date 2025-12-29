// Load both script files
const scriptModule = require('./script.js');
const testModule = require('./script.test.js');

// Make validation functions available globally for tests
global.validateName = scriptModule.validateName;
global.validateEmail = scriptModule.validateEmail;
global.validateMessage = scriptModule.validateMessage;
global.validateForm = scriptModule.validateForm;

// Make Quote API functions available globally for tests
global.fetchQuoteFromAPI = scriptModule.fetchQuoteFromAPI;
global.getRandomFallbackQuote = scriptModule.getRandomFallbackQuote;
global.fetchQuote = scriptModule.fetchQuote;
global.displayQuote = scriptModule.displayQuote;
global.loadNewQuote = scriptModule.loadNewQuote;
global.FALLBACK_QUOTES = scriptModule.FALLBACK_QUOTES;

// Run tests asynchronously
(async () => {
    const results = await testModule.runAllPropertyTestsAsync();
    testModule.printTestResults(results);
    
    // Exit with appropriate code
    process.exit(results.every(r => r.passed) ? 0 : 1);
})();

