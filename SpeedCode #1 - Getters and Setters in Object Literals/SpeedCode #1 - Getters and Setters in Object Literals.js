const person = {
  firstName: "Jane", 
  lastName: "Doe", 
  get fullName() { 
    return `${this.firstName} ${this.lastName}`; 
  }, 
  set fullName(name) { 
    const parts = name.split(' '); 
    this.firstName = parts[0]; 
    this.lastName = parts[1]; 
  }
}
