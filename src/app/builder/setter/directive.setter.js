
const { SetterAbstract } = require('./setter.abstract');

class DirectiveSetter extends SetterAbstract {
    constructor(attribute) {
        super(attribute);
    }

    config(htmlApp) {
        super.config(htmlApp);
        htmlApp.addAttribute(this.attribute, '');
    }
}

module.exports.init = (attribute) => new DirectiveSetter(attribute);