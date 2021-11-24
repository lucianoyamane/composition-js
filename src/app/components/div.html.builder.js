const { CompositeHtmlBuilder } = require('../builder/composite.html.builder');
const { init:initAttrSetter } = require('../builder/setter/attr.setter');

class DivHtmlBuilder extends CompositeHtmlBuilder {

    constructor() {
        super('div');
    }

    configSetters(setters) {
        setters.push(initAttrSetter('class').addValue(this._class));
    }

    class(classValue) {
        this._class = classValue;
        return this;
    }
}

module.exports.builder = () => new DivHtmlBuilder();