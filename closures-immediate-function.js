// # Closure 
function greeting(){

    // private variable "_message" with underscore by naming convention. 
    var _message = 'message 1 from the private variable 1';
    return _message 
}

//immediate anonymous function
(function x(){
    var _x = greeting()
    console.log(_x)
})()

