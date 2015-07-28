var expect = require('chai').expect;

var Pirate = require('../lib/pirate');

describe('Pirate', function() {
  var pirate;

  beforeEach(function() {
    pirate = new Pirate();
  });

  it('constructor should be a function', function() {
    expect(Pirate).to.be.a('function');
  });

  it('should create objects', function() {
    expect(pirate).to.be.an('object');
  });

  it('should have no treasure to start', function() {
    expect(pirate.treasure)
      .to.be.a('number')
      .and.to.be.equal(0);
  });

  it('should have a talk function', function() {
    expect(pirate.talk).to.be.a('function');
  });

  it('should be a piratey sort of a sentence', function() {
    expect(pirate.talk()).to.match(/^A(r)*/);
  });

  it('should have a pillage function', function() {
    expect(pirate.pillage).to.be.a('function');
  });

  it('should gain treasure after a pillage', function() {
    pirate.pillage();
    expect(pirate.treasure).to.be.above(10);
  });
});


