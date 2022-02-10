// With function constructor

let instance = null;

function User() {
    if(!instance) instance = this;
        return instance;
}
const user1 = new User();
const user2 = new User();

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
const user3 = singleton.getInstance('Peter', 24);
const user4 = singleton.getInstance('Mark', 26);
// prints true
console.log(user3 === user4);

// ES6 syntax

class Counter {

    constructor() {
        if (typeof Counter.instance === 'object') {
            return Counter.instance;
        }
        this.count = 0;
        Counter.instance = this;
        return this;
    }

    getCount() {
        return this.count;
    }

    increaseCount() {
        return this.count++;
    }
}

const counter1 = new Counter();
const counter2 = new Counter();

// prints true
console.log(counter1 === counter2);