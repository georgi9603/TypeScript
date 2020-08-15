class Custoemr {
  name: string;
  isActive: boolean;

  constructor(name: string) {
    this.name = name;
    this.isActive = true;
  }

  announce() {
    return "Hello, customer " + this.name;
  }
}

// create a new instance
let firstCustomer = new Custoemr("Alice");
