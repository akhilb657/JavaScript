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

class Student extends User{
  constructor(username, age, semester, rank){
    super(username, age);
    this.semester = semester;
    this.rank = rank;
  }
  updateRank(newRank){
    this.rank = newRank;
    console.log(this.rank);
  }
  display(){
    if(this.active){
      console.log(`Username: ${this.username}, Age: ${this.age} , Semester: ${this.semester}, Rank: ${this.rank}`);
    }else{
      console.log("Please login");
    }
  }
}

const userOne = new User("Akhil", 24);
userOne.login().display();

const studentOne = new Student("Bala", 35, 5, 10);
studentOne.login().display();
// console.log(studentOne.rank);
// studentOne.updateRank(9);

// class Teacher extends User{

// }  
