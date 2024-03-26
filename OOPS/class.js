class User {
  constructor(username,age){
    this.username = username;
    this.age = age;
    this.active = false;
  }
  login(){
    this.active = true;
    return this
  }
  logout(){
    this.active = false;
    return this
  }
  display(){
    if(this.active){
      console.log(`Username: ${this.username}, Age: ${this.age}`);
    }else{
      console.log("Please login");
    }
  }
}

const userOne = new User("Akhil", 24);
// userOne.login();
// userOne.display();
userOne.login().display();
// console.log(userOne.username);
// console.log(userOne.login());
// console.log(userOne.logout());

// const userTwo = new User("Ranga", 25);
// console.log(userTwo.username);
// console.log(userTwo.active);
// userTwo.login();
// userTwo.logout();

// const userThree = new User("Reddy", 22);
// console.log(userThree.username);