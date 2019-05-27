class Person {
  constructor(name) {
    this.name = name;
  }

  static sayHello(name) {
    return `Hi!${name}!`;
  }

  get age() {
    if (this._age !== undefined) {
      return `${this.name} age is ${this._age}.`;
    }
    return `Don't know ${this.name}'s age.`;
  }

  set age(age) {
    this._age = age;
  }

  getFrom() {
    const state = 'Taiwan';
    return `${this.name} from ${state}.`;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  getPosition() {
    return `${this.name}'s position is the ${this.position}.`;
  }

  superCallGetForm() {
    return super.getFrom();
  }
}

console.log(Person.sayHello('Luck'));

const john = new Person('John');

console.log(JSON.stringify(john));
console.log(JSON.stringify(john.state));
console.log(JSON.stringify(john.getFrom()));
console.log(john.age);
console.log(john.age = 18);
console.log(john.age);

const luck = new Employee('Luck', 'Front-end');

console.log(luck.getFrom());
console.log(luck.getPosition());
console.log(luck.superCallGetForm());
