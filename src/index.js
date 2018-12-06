var toastr = require("toastr");

var regexPatern = {
    ALPHABET: /^[A-Za-z]+$/, NUMBER : /^[0-9]+$/,
    ALPHANUMERIC: /^[0-9a-zA-Z]+$/, DECIMAL_NUMBER: /^[0-9]+\.[0-9]+$/, IP_ADDRESS: /^([.0-9])+$/, PORT_RANGE: /^[-0-9]+$/,
    IP_ADDRESS_RANGE: /^([-.0-9])+$/, IP_ADDRESS_SUBNET: /^([.0-9\/])+$/, MAC_ADDRESS: /^[-:0-9a-zA-Z]+$/, ALPHANUMERIC_UPPERCASE: /^[,0-9A-Z]+$/
}
class KeyboardRestrict {

    /**
     * To get the regex pattern
     * 
     * @param {string} type 
     */
    static getRegexPatern(type) {
        if (type && regexPatern[type.toUpperCase()] !== undefined) {
            return regexPatern[type.toUpperCase()];
        }
        return false;
    }

    /**
     * To check the keyboard access
     * 
     * @param {object} e 
     * @param {string} type 
     */
    static isAccessible(e, type, callback, showToast) {
        let regex = KeyboardRestrict.getRegexPatern(type);
        if (regex && e.target.value && !regex.test(e.target.value)) {
            if (showToast) {
                toastr.remove();
                toastr.warning("Only " + type.toLowerCase() + " are allowed")
            }
            e.preventDefault()
        } else {
            if(callback !== undefined) {
                callback();
            }
        }
    }
}

module.exports = KeyboardRestrict