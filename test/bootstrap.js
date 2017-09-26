
function createGame() {
  runTests();
}

function runTests() {
  if (window.mochaPhantomJS) {
    mochaPhantomJS.run();
  }
  else {
    mocha.run();
  }
}