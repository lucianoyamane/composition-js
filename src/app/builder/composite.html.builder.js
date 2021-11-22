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
    defineHtml() {
        let tag = super.defineHtml();
        this.components.forEach(component => {
            tag.adicionaItem(component.codigo());
        });
        return tag;
    }

 }

 module.exports.CompositeHtmlBuilder = CompositeHtmlBuilder;