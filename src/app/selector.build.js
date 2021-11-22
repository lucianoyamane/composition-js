var cheerio = require('cheerio');

class SelectorBuild {

    constructor(tagName) {
        this._selector = this.__load(tagName)
    }

    __load(tagName) {
        this._html = cheerio.load(this.__initTag(tagName),
            {
                lowerCaseTags: false,
                lowerCaseAttributeNames: false,
                decodeEntities: false,
                xmlMode: false,
                recognizeSelfClosing: false
            });

        return this._html(tagName);
    }

    __initTag(tagName) {
        return `<${tagName}></${tagname}>`;
    }

    selector() {
        return this._selector;
    }

    attr(name, value) {
        this._selector.attr(name, value);
    }

    prop(name) {
        this.attr(name, '');
    }

    class(name) {
        this._selector.addClass(name);
    }

    child(selectorChild) {
        this._selector.append(selectorChild);
    }

    text(text) {
        this._selector.text(text);
    }

}

module.exports.load = (tagName) => {
    return new SelectorBuild(tagName);
}