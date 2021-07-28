/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 

/**
 * 
 * @param {type} input The string input to be split
 * @param {type} includeTokensInOutput If true, the tokens are retained in the splitted output.
 * @param {type} tokens The tokens to be employed in splitting the original string.
 * @returns {Scanner}
 */
function Scanner(input, includeTokensInOutput, tokens) {
    this.input = input;
    this.includeTokensInOutput = includeTokensInOutput;
    this.tokens = tokens;
}

Scanner.prototype.scan = function () {
    var inp = this.input;

    var parse = [];
    this.tokens.sort(function (a, b) {
        return b.length - a.length; //ASC, For Descending order use: b - a
    });
    for (var i = 0; i < inp.length; i++) {


        for (var j = 0; j < this.tokens.length; j++) {

            var token = this.tokens[j];
            var len = token.length;
            if (len > 0 && i + len <= inp.length) {
                var portion = inp.substring(i, i + len);
                if (portion === token) {
                    if (i !== 0) {//avoid empty spaces
                        parse[parse.length] = inp.substring(0, i);
                    }
                    if (this.includeTokensInOutput) {
                        parse[parse.length] = token;
                    }
                    inp = inp.substring(i + len);
                    i = -1;
                    break;
                }

            }

        }

    }
    if (inp.length > 0) {
          parse[parse.length] = inp;
    }

    return parse;


};

function main(){
    var sc = new Scanner("34+45+sin(33cos(8.24))/22^cosh(4-tan(2))+sinsinh(3)-sinh(sin(2))", true, 
    new Array("+","-","sin","sinh","cos","cosh","^","/","(",")")); 
    console.log(sc.scan());
    return 1;
}
main();
