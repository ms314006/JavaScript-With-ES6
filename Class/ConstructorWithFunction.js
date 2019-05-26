// 基本 constructor
function Person(name) {
  // public properties
  this.name = name;

  // private value
  const state = 'Taiwan';

  // privileged methods
  this.getFrom = () => `${this.name} from ${state}.`;
}

const john = new Person('John');

console.log(john); // { name: 'John', getFrom: [Function] }
console.log(john.state); // {"name":"John"}
console.log(john.getFrom());

// 繼承 Person 父類別
function Employee(name, position) {

  // 將 this 送給 Person 建立 properties
  Person.call(this, name);
  this.position = position;

  // public properties
  this.getPosition = () => `${this.name}'s position is the ${this.position}.`;
}

// 繼承父類別的方法
Employee.prototype = Object.create(Person.prototype);
const luck = new Employee('Luck', 'Front-end');

console.log(luck.getFrom());
console.log(luck.getPosition());


/*
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  return `Hello!I am ${this.name}!`;
};

function Employee(name) {
  Person.call(this, name);
}

Employee.prototype = Object.create(Person.prototype);

// 進行 Super call
Employee.prototype.superCallSayHello = function () {
  return Person.prototype.sayHello.call(this);
};

const luck = new Employee('Luck');

console.log(luck.superCallSayHello());
*/
