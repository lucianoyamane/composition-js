var chai = require('chai'); 
var expect = chai.expect;

const { builder } = require('../../../src/app/components/div.html.builder');

describe("div.html.builder", function(){

    it('Test codigo', function() {
        let expected = '<div class="test_class"></div>';

        let result = builder().class('test_class').textCode();

        expect(expected).to.eql(result)

    })

})