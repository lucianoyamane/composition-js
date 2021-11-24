const { HtmlBuilder } = require('../builder/html.builder');
const { TextSetter } = require('../builder/setter/text.setter');

class H2HtmlBuilder extends HtmlBuilder {

    constructor() {
        super('h2');
    }

    configSetters() {
        let setters = [];
        setters.push(new TextSetter().addValue(this._text));
        return setters;
    }

    text(value) {
        this._text = value;
        return this;
    }
}

module.exports = {
    builder: function() {
        return new H2HtmlBuilder();
    }
}