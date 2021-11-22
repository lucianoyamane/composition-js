const { SetterAbstract } = require('./setter.abstract');

class AttrSetter extends SetterAbstract {
    constructor(attributte) {
        super(attributte);
    }

    config(mainTagSelector) {
        super.config(mainTagSelector);
        if (this.value) {
            mainTagSelector.defineAttr(this.attributte, this.value);
        }
    }
}

module.exports.AttrSetter = AttrSetter;