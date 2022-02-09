const myRevealingModule = (function() {

    let privateVar = 'Peter';
    const publicVar  = 'Hello World';
    function privateFunction() {
        console.log('Name: '+ privateVar);
    }

    function publicSetName(name) {
        privateVar = name;
    }
    function publicGetName() {
        privateFunction();
    }
    /** открываем функции и переменные, назначая их свойствам объекта */
    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    };
})();
myRevealingModule.setName('Mark');
// Выводит Name: Mark
myRevealingModule.getName();

console.log(myRevealingModule)