const { initApp } = require('../html.app');

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

    configSetters(setters) {
    }
    
    addSetter(setter) {
        this._setters.push(setter);
    }

    setHtml() {
        let htmlApp = initApp(this._tagName);
        this.configSetters(this.setters);
        this.setters.forEach(setter => setter.execute(htmlApp));
        return htmlApp;
    }

    selector() {
        let htmlApp = this.setHtml();
        return htmlApp.execute().selector();
    }

    textCode() {
        let selector = this.selector();
        if (selector) {
            return selector.toString();
        }
        return '';
    }

}

module.exports.HtmlBuilder = HtmlBuilder;