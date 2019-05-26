class Person {
  constructor(name) {
    this.name = name;
    const state = 'Taiwan';
    this.getFrom = () => `${this.name} from ${state}.`;
  }
}

const john = new Person('John');

console.log(JSON.stringify(john));
console.log(JSON.stringify(john.state));
console.log(JSON.stringify(john.getFrom()));

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
    this.getPosition = () => `${this.name}'s position is the ${this.position}.`;
  }
}

const luck = new Employee('Luck', 'Front-end');

console.log(luck.getFrom());
console.log(luck.getPosition());
