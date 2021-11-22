var htmlApp = require('../html.app');

class HtmlBuilder {

    constructor(tagName) {
        this._tagName = tagName; 
        this._setters = [];
    }

    set mainTagSelector(mainTagSelector) {
        this._mainTagSelector = mainTagSelector;
    }

    get mainTagSelector() {
        return this._mainTagSelector;
    }

    get setters() {
        return this._setters;
    }

    configSetters() {
        return [];
    }
    
    addSetter(setter) {
        this._setters.push(setter);
    }

    setHtml() {
        let tag = new htmlApp.HtmlApp(this._tagName);
        let setters = this.associaSetters();
        setters.forEach(setter => setter.executa(tag));
        return tag;
    }

    selector() {
        let tag = this.setHtml();
        return tag.selector();
    }

    codigo() {
        let selector = this.selector();
        if (selector) {
            return selector.toString();
        }
        return '';
    }

}

module.exports.HtmlBuilder = HtmlBuilder;