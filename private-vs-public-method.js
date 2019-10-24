function Person1(val){
    var name = val;

    // private method getName
    var getName = function(){
        return name;
    }
    return getName;
}

var me1 = Person1('Rolandas-1');// me1 is not an instance of Person1
console.log(me1());

// Object constructor function
function Person2(val){ // It is considered good practice to name constructor functions with an upper-case first letter.
    var _name = val;

    // public method getName
    this.getName = function(){
        return _name;
    }
}
// The JavaScript prototype property allows you to add new properties to object constructors:
Person2.prototype.age = "30";
// Prototype method
Person2.prototype.info = function() {
    return this.getName() + " is " + this.age + ' years old.';
};
// A new object is creatd with a prototype that is Person2.prototype.
// That means the new object inherits any methods and properties of the Person2.prototype, and from its prototype, etc.
var me2 = new Person2('Rolandas-2'); // me2 is an instance of Person2
console.log(me2.getName());
console.log(me2.age);
console.log(me2.info());

// object literal notation
var person3 = {firstName: me2.getName(), lastName:"Doe", eyeColor:"blue"};
// person3.prototype.age = "30"; TypeError: Cannot set property 'age' of undefined
// person3 is a variable reference to object literal and does not have access to prototype (which is used for constructor functions)
// constructor functions are basically functions that will be called using the 'new' operator to create new object instances
console.log(person3.firstName + ' dot notation');
console.log(person3['firstName'] + ' bracket notation');

// In JavaScript there are two ways to create an object: the constructor function or the literal notation.
// constructor function
function Website() {};

// literal notation
var Website = {};

// Either way you have just created a JavaScript object called Website. The main difference here is what you can do with it. 
// With the constructor function notation you create an object that can be instantiated into multiple instances (with the new keyword), 
// while the literal notation delivers a single object,
