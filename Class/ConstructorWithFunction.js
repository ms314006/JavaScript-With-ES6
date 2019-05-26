// 基本 constructor
function Person(name) {
  // public properties
  this.name = name;

  // private value
  const state = 'Taiwan';

  // privileged methods
  this.getFrom = () => `${name} from ${state}.`;
}

const John = new Person('John');

console.log(John); // { name: 'John', getFrom: [Function] }
console.log(John.state); // {"name":"John"}
console.log(John.getFrom());

// 繼承 Person 父類別
function Employee(name, position) {

  // 將 this 送給 Person 建立 properties
  Person.call(this, name);
  this.position = position;

  // public properties
  this.getPosition = () => `${name}'s position is the ${position}`;
}

// 繼承父類別的方法
Employee.prototype = Object.create(Person.prototype);
const Luck = new Employee('Luck', 'Front-end');

console.log(Luck.getFrom());
console.log(Luck.getPosition());
