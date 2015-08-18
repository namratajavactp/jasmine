// File: chapter14/protractor.conf.js
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // The address where our server under test is running
  baseUrl: 'http://localhost:8000/',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the location of the
  // spec file. They may include glob patterns.
  specs: ['*Spec*.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true // Use colors in the command line report.
  }
};


/*An End to End Test
Protractor tests use the same Jasmine scaffolding syntax we have been using for our unit tests, so we have the same describe blocks for a set
of tests, and individual it blocks for each test. In addition to these, Protractor exposes some global variables that are needed for writing 
our end to end tests, namely:
1. browser: This is a wrapper around WebDriver which allows us to interact with the browser directly. We use this object to navigate to different
 pages and page level information.

2. element: The element object is a helper function to find and interact with HTML elements. It takes a strategy to find the elements as
the argument, and then gives you back an element which you can interact with by clicking and sending key strokes to it.

3. by: The by is an object with a collection of element finding strategies. We can find elements by id or CSS classes, which are inbuilt 
strategies of WebDriver. Protractor adds a few strategies on top of that to find elements by model, binding and repeater as well, which are 
AngularJS specific ways to find certain elements on the page.