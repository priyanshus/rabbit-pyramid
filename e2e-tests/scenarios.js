'use strict';
'use strict';

var chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),

expect = chai.expect;

chai.use(chaiAsPromised);

describe('Rabbit Store', function() {

  it('should allow user to buy mobile', function(done) {
    browser.get('/app');
    browser.sleep(500);
    var buyButton = element.all(by.name('buy')).get(1);
    buyButton.click();
    var buyLink = element(by.name('buylink'));
    buyLink.click();

    element(by.name('username')).sendKeys('admin');
    element(by.name('password')).sendKeys('admin');
    element(by.name('loginbutton')).click();
    done();
  });
});
