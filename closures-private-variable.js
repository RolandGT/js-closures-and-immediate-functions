// # Closure 
function greeting(){

    // private variable "_message" with underscore by naming convention. 
    var _message = 'message 1 from the private variable 1';

    var greet = function(){
        console.log(_message) // displays variable in console
    }

    return greet // returns a function without invoking it
}

var outerGreet = greeting(); // greeting returns a function greet an saves into the variable outerGreet
outerGreet() // outerGreet invokes greet function wich returns a console.log(variable)

function greeting2(){

    // private variable "_message" with underscore by naming convention. 
    var _message = 'message 2 from the private variable 2';

    var greet = function(){
        return _message // returns variable
    }

    return greet // returns a function without invoking it
}

var outerGreet2 = greeting2(); // greeting2 returns a function greet an saves into the variable outerGreet2
console.log(outerGreet2()) // outerGreet invokes greet function wich returns a variable

var x = greeting._message 
console.log(x) //undefined