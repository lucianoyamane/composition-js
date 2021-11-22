const { CompositeHtmlBuilder } = require('../builder/composite.html.builder');
const { TextSetter } = require('../builder/setter/text.setter');

class H2HtmlBuilder extends CompositeHtmlBuilder {

    constructor() {
        super('h2');
    }

    associaSetters() {
        let setters = [];
        setters.push(new TextSetter().value(this._text));
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