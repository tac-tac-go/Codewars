export class Dinglemouse{
  
  firstName : string = '';
  lastName : string = ''
  
  constructor( firstName: string, lastName: string ){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  getFullName(){
    return `${this.firstName} ${this.lastName}`.trim()
  }
  
}
