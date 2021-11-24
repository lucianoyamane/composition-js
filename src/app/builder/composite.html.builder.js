const { HtmlBuilder } = require('./html.builder')

 class CompositeHtmlBuilder extends HtmlBuilder {

    constructor(htmlBuilder) {
        super(htmlBuilder);
        this._components = [];
    }

    addComponent(builder) {
        this._components.push(builder);
        return this;
    }

    get components() {
        return this._components;
    }
    
    setHtml() {
        let htmlApp = super.setHtml();
        this.components.forEach(component => {
            htmlApp.addItem(component.selector());
        });
        return htmlApp;
    }

 }

 module.exports.CompositeHtmlBuilder = CompositeHtmlBuilder;