const { HtmlBuilder } = require('../builder/html.builder');
const { init:initTextSetter } = require('../builder/setter/text.setter');

class H2HtmlBuilder extends HtmlBuilder {

    constructor() {
        super('h2');
    }

    configSetters(setters) {
        setters.push(initTextSetter().addValue(this._text));
    }

    text(value) {
        this._text = value;
        return this;
    }
}

module.exports.builder = () => new H2HtmlBuilder();