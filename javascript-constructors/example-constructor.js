function ExampleConstructor() {}
console.log('value of ExampleConstuctor:', ExampleConstructor.prototype);
console.log('type of ExampleConstructor:', typeof (ExampleConstructor.prototype));
var exampleConstructornew = new ExampleConstructor();
console.log('value of ExampleConstructorNew:', exampleConstructornew);
var exampleConstuctorInstance = exampleConstructornew instanceof ExampleConstructor;
console.log('value of exampleContructorInstance:', exampleConstuctorInstance);
