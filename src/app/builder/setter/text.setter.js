const { SetterAbstract } = require('./setter.abstract');

class TextSetter extends SetterAbstract {
    constructor() {
        super('text');
    }

    config(mainTagSelector){
        super.config(mainTagSelector);
        if (this.value) {
            mainTagSelector.defineText(this.value);
        }
    }
}

module.exports.TextSetter = TextSetter;