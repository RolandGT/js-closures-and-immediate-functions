// private methods can be called by other methods in the same class,
// but javascript does not have a native way of doing this.
// It is possibe to emulate private methods with closures.

var counter = (function(){
    var _privateCounter = 0;
    function changeBy(val){
        _privateCounter += val;
    }
    return{
        increment : function(){
            changeBy(1);
        },
        decrement : function(){
            changeBy(-1);
        },
        value : function(){
            return _privateCounter;
        }
    }
})(); 
// After execution/self invocation of the anonymous function it is going to return into variable counter.
// Counter variable will hold shared environment  including private variable and private function changeBy.
// We can only be able to acsess returned functions (increment, decrement and value) like public methods through counter (counter.public-method-name)

console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());