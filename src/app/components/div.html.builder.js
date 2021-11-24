const { CompositeHtmlBuilder } = require('../builder/composite.html.builder');
const { init:initAttrSetter } = require('../builder/setter/attr.setter');
const { init:initDirectiveSetter } = require('../builder/setter/directive.setter');

class DivHtmlBuilder extends CompositeHtmlBuilder {

    constructor() {
        super('div');
    }

    configSetters(setters) {
        setters.push(initAttrSetter('class').addValue(this._class));
        if (this.disabledBoolean) {
            setters.push(initDirectiveSetter('disabled'));
        }
    }

    class(classValue) {
        this._class = classValue;
        return this;
    }

    disabled() {
        this.disabledBoolean = true;
        return this;
    }
}

module.exports.builder = () => new DivHtmlBuilder();