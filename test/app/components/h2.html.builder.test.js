var chai = require('chai'); 
var expect = chai.expect;

const { builder } = require('../../../src/app/components/h2.html.builder');

describe("h2.html.builder", function(){

    it('Test codigo', function() {
        let expected = '<h2>test_text</h2>';

        let result = builder().text('test_text').textCode();

        expect(expected).to.eql(result)

    })

})