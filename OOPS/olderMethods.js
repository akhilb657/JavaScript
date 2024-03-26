function User(username,age){
  this.username = username;
  this.age = age;
  this.active = false;
}

User.prototype.login = function(){
  this.active = true;
  return this
}

User.prototype.logout = function(){
  this.active = false;
  return this;
}

User.prototype.display = function(){
  if(this.active){
    console.log(`Username: ${this.username}, Age: ${this.age}`);
  }else{
    console.log("Please login");
  }
}

function Student(username, age, semester,rank){
  User.call(this,username, age);
  this.semester = semester;
  this.rank = rank;
}

Student.prototype = Object.create(User.prototype);

Student.prototype.updateRank = function(newRank){
  this.rank = newRank;
  console.log(this.rank);
}

Student.prototype.display = function(){
  if(this.active){
    console.log(`Username: ${this.username}, Age: ${this.age} , Semester: ${this.semester}, Rank: ${this.rank}`);
  }else{
    console.log("Please login");
  }
}

console.log(User.prototype);
console.log(Student.prototype);

const userOne = new User("Akhil", 24);
// console.log(userOne.username);
// userOne.login();
// userOne.logout();

const studentOne = new Student("Akhil",23,3,2);
// console.log(studentOne.username);
studentOne.updateRank(1);