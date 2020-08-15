export class Customer {
  name: string;
  isActive: boolean;

  constructor(name: string) {
    this.name = name;
    this.isActive = true;
  }

  //access modifiers:
  //default public - all is accessible outside of the code
  //private - can call the method only from inside the class
  //protected - can call from inside the class + from classes which inherits the this one but no outside

  announce() {
    return "Hello, customer " + this.name;
  }
}

// create a new instance
let firstCustomer = new Customer("Alice");

class SpecialCustomer extends Customer {
  // inherits data and behaviour of Customer and
}
