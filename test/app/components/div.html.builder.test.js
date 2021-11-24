var chai = require('chai'); 
var expect = chai.expect;

const { builder } = require('../../../src/app/components/div.html.builder');
const { builder:builderH2 } = require('../../../src/app/components/h2.html.builder')

describe("div.html.builder", function(){

    it('Test codigo', function() {
        let expected = '<div class="test_class"></div>';

        let result = builder().class('test_class').textCode();

        expect(expected).to.eql(result)

    })

    it('Test addComponent', function() {
        let expected = '<div class="test_class"><h2>test_text</h2></div>';
        let result = builder().class('test_class').addComponent(builderH2().text('test_text')).textCode();

        expect(expected).to.eql(result)
    })



})