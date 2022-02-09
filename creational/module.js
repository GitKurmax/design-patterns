// IIFE (Immediately-Invoked Functional Expression

const myModule = (function() {

    const privateVariable = 'Hello World';

    function privateMethod() {
        console.log(privateVariable);
    }
    return {
        publicMethod: function() {
            privateMethod();
        }
    }
})();

myModule.publicMethod();
console.log(myModule)