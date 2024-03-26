/*
const names = ["Akhil", "Ranga", "Reddy", "Aaa"]

console.log(names);

console.log(names.length);

console.log(names.sort());

//console.log(window.innerWidth);

// boolean,numbers,strings are primitive dataTypes

const t = "Akhil";
len = t.length;
console.log(len);

const s = new String("Akhil")
console.log(s);
*/

/*
const userOne = {
  email: "abc@gmail.com",
  name: "abc",
  login(){
    console.log(this.email,"has loggoed in");
  },
  logout(){
    console.log(this.email,"has logged out");
  }
};

console.log(userOne.name);

console.log(userOne.login());

console.log(userOne.logout());

userOne.name = 'xyz';
console.log(userOne);

console.log(userOne.name);
console.log(userOne['name']);

userOne['name'] = 'rrr';
console.log(userOne);

let prop = 'name'
console.log(userOne[prop]);

prop = 'email';
console.log(userOne[prop]);

console.log(userOne.prop);

userOne.age = 22;

console.log(userOne);

console.log(userOne.age);

const userTwo = {
  email: "a1111c@gmail.com",
  name: "abadasc",
  login(){
    console.log(this.email,"has loggoed in");
  },
  logout(){
    console.log(this.email,"has logged out");
  }
};

const userThree = {
  email: "abcsdsad@gmail.com",
  name: "abcdsaddas",
  login(){
    console.log(this.email,"has loggoed in");
  },
  logout(){
    console.log(this.email,"has logged out");
  }
};
*/

/*

const students = ["Akhil", "Reddy", "Ranga"];
console.log(students)

const names = new Array("Akhil","Ranga");
console.log(names)

const info = {};
console.log(info);

const customer = new Object();
console.log(customer);

const name = "Akhil";
console.log(name);

const product = new String("Water");
console.log(product);

console.log(name.toUpperCase());
console.log(product.toUpperCase());
*/

const userOne = {
  userName: "akhil657",
  fullName: "Akhil Boyanapalli",
  email: "akhil@gmail.com",
  age: 24,
  login(){
    console.log("login");
  },
  logout(){
    console.log("logout");
  }
};

console.log(userOne.age);
console.log(userOne.email);
userOne.login();

const userTwo = {
  userName: "ranga28",
  fullName: "Ranga V",
  email: "ranga@gmail.com",
  age: 27,
  login(){
    console.log("login");
  },
  logout(){
    console.log("logout");
  }
};

console.log(userTwo.age);
console.log(userTwo.email);
userTwo.login();

const userThree = new UserActivation("kittu11","Krishna K", "krishna@gmail.com", 25);
console.log(userThree.userName);