import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/Api/players';


Meteor.startup(() =>{
  /*Players.insert({
    name: 'Ida',
    score: 100
  });
  console.log(Players.find().fetch());

let function square(x){
  return x*x;
};*/

//let square=(x) =>  x*x;
  //console.log(square(10));
  //object function
/*  let user={
    name:'Joy',
    sayHi (){
      setTimeout(() =>{
      console.log(this.name);
    },1000);
    }
  };
  user.sayHi(1,3);*/
  //let numbers=[9,99,4,56];
  //let newNumbers = numbers.map((number)=> number+1);
  //console.log(newNumbers);

/*class Person{
  constructor(name ='Anonymous',age=0){
    this.name=name;
    this.age=age;
  }
  getGreetings(){
    return `Hi I am ${this.name}.`;
  }
  getPersonsDescription(){
    return `${this.name} is ${this.age} year(s) old.`;
  }

}

class Employee extends Person{
  constructor(name,age,title){
    super(name,age);
    this.title=title;
  }
  //override parent
  getGreetings(){
    if(this.title){
    return `Hi I am ${this.name}. i work as ${this.title}`;
  }
  else{
    return super.getGreetings();
  }
  }
  //return boolean
  hasJob(){
    return !!this.title;
  }
}

class Programmer extends Person{
  constructor(name,age,programingLanguage='assembly'){
    super(name,age);
    this.title=programingLanguage;
  }
  //override parent
  getGreetings(){

    return `Hi I am ${this.name}. i work as ${this.title} developer`;


  }

}

let me = new Person('Joy', 27);
console.log(me.getGreetings());

let person = new Person('Ida',26);
console.log(person.getPersonsDescription());

let me1 = new Employee('Joy', 27, 'web admin');
console.log(me1.getGreetings());

let person1 = new Employee('Ida');
console.log(person1.getGreetings());

let me2 = new Employee('Joy', 27, 'web admin');
console.log(me2.hasJob());

let person2 = new Employee('Ida');
console.log(person2.hasJob());

let me3 = new Programmer();
console.log(me3.getGreetings());

let person3 = new Programmer('Ida',25,'Java Script');
console.log(person3.getGreetings());*/



});
