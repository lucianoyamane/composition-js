
const { SetterAbstract } = require('./setter.abstract');

class DirectiveSetter extends SetterAbstract {
    constructor(attributte) {
        super(attributte);
    }

    config(mainTagSelector) {
        super.config(mainTagSelector);
        mainTagSelector.defineAttr(this.attributte, '');
    }
}

module.exports.DirectiveSetter = DirectiveSetter;