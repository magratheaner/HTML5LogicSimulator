describe('AndGate', function() {
  describe('Output', function () {
  	context('both inputs == true', function() {
  		it('returns true', function () {
  			let testGate = new AndGate();

  			testGate.input(true, true);

      	expect(testGate.output()).to.be.true;
    	});
  	});
  	context('input 1 false', function() {
  		it('returns false', function () {
  			let testGate = new AndGate();

  			testGate.input(false, true);

      	expect(testGate.output()).to.be.false;
    	});
  	});
  });
});