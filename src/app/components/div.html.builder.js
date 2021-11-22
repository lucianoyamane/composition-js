const { CompositeHtmlBuilder } = require('../builder/composite.html.builder');
const { AttrSetter } = require('../builder/setter/attr.setter');

class DivHtmlBuilder extends CompositeHtmlBuilder {

    constructor() {
        super('div');
    }

    configSetters() {
        let setters = [];
        setters.push(new AttrSetter('class').value(this._class));
        return setters;
    }

    class(classValue) {
        this._class = classValue;
        return this;
    }
}

module.exports = {
    builder: function() {
        return new DivHtmlBuilder();
    }
}