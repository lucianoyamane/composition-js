class SetterAbstract {

    constructor(attribute) {
        this._attribute = attribute;
    }

    config(mainTagSelector) {
        if (this._required) {
            this._toValid();
        }
    }

    _toValid() {
        if (!this._value) {
            throw new SyntaxError(this._atributo + ' null');
        }
    }

    required() {
        this._required = true;
        return this;
    }

    value(value) {
        this._value = value;
        return this;
    }

    get attribute() {
        return this._attribute;
    }

    get value() {
        return this._value;
    }

    execute(mainTagSelector) {   
        this.config(mainTagSelector);
    }
}

module.exports.SetterAbstract = SetterAbstract;