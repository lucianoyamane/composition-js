 
 const { load } = require('./selector.build');

 class HtmlComposite {
     constructor(tagName) {
         this._tagName = tagName;
         this.attrArray = [];
         this.classArray = [];
         this.itemArray = [];
     }
 
     addAttribute(name, value) {
         this.attrArray.push({name, value})
     }
 
     addPropertie(name) {
         this.attrArray.push({name})
     }
 
     addClass(classAttribute) {
         this.classArray.push({classAttribute})
     }
 
     text(value) {
         this._text = value;
     }
 
     addItem(child) {
         this.itemArray.push({ child });
     }

     execute() {
        return this._buildSelector().selector();
     }
 
     _buildSelector() {
         let selectorBuild = load(this._tagName);
         this.attrArray.forEach(item => selectorBuild.attr(item.name, item.value));
         this.classArray.forEach(item => selectorBuild.class(item.classAttribute));
         this.itemArray.forEach(item => selectorBuild.child(item.child));
         if (this._text) {
            selectorBuild.text(this._text);
         }
         return selectorBuild;
     }
 }
 
 module.exports.HtmlComposite = HtmlComposite;