// With function constructor

let instance = null;
function User(name, age) {
    if(instance) {
        return instance;
    }
    instance = this;
    this.name = name;
    this.age = age;

    return instance;
}
const user1 = new User('Peter', 25);
const user2 = new User('Mark', 24);
// выводит true
console.log(user1 === user2);



// With pattern module

const singleton = (function() {
    let instance;

    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return {
        getInstance: function(name, age) {
            if(!instance) {
                instance = new User(name, age);
            }
            return instance;
        }
    }
})();
const user1 = singleton.getInstance('Peter', 24);
const user2 = singleton.getInstance('Mark', 26);
// prints true
console.log(user1 === user2);