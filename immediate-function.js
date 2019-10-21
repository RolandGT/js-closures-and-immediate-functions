// An immediate function is one that executes as soon as it is defined. 
// Creating an immediate function is simple: you add the open/close parentheses after the closing curly bracket, 
// and then wrap the entire function in parentheses. That’s it!
// It's not about an immediately executed function vs. a regular function; in fact it has very little to nothing in relation.
// The sole purpose of an immediately invoked wrapping-function is to scope variables local to the wrapping function.
// Wrapped variables will be in the function scope, not the global. That's the scope advantage.
(function(){
    name = 'RGT'
    console.log('hello, ' + name + '. I am an immediate function');
}())

// same with passing a variable to immediate function

var myName = 'RGT';

(function(thisName){
    console.log( 'hello, my name is: ' + thisName );
}(myName))
