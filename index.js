function Module11( base, size) {
    this.base = base
    this.size = size
}

function sumDigits (module11, value) {
    let  mult = module11.base
    let sum = 0
    for (let i = value.length-1; i >= 0; i--) {
        sum += (mult*value[i])
        if (mult == module11.size) mult = module11.base; else mult++
    }
    return sum
}

Module11.prototype.checkDigit = function (value) {
    let sum = sumDigits(this, value)
    let remainder = (sum % 11)
    let result =  remainder < 2 ? 0 : 11 - remainder
    return result
}

module.exports = Module11
