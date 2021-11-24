const { SetterAbstract } = require('./setter.abstract');

class AttrSetter extends SetterAbstract {
    constructor(attributte) {
        super(attributte);
    }

    config(htmlApp) {
        super.config(htmlApp);
        if (this.value) {
            htmlApp.addAttribute(this.attribute, this.value);
        }
    }
}

module.exports.AttrSetter = AttrSetter;