function validParentheses(parens){
    return parens[0] === '(' ? parens[1] === ')' && parens.length <= 2 : parens === ''
}
module.exports = validParentheses;