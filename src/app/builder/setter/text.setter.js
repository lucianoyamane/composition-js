const { SetterAbstract } = require('./setter.abstract');

class TextSetter extends SetterAbstract {
    constructor() {
        super('text');
    }

    config(htmlApp){
        super.config(htmlApp);
        if (this.value) {
            htmlApp.text(this.value);
        }
    }
}

module.exports.TextSetter = TextSetter;