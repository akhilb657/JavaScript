class Calculator {
  static result = 0;

  static add(n){
    this.result += n;
  }

  static sub(n){
    this.result -= n;
  }

  static mul(n){
    this.result *= n;
  }

  static div(n){
    this.result /= n;
  }

  static{
    console.log("Hello Static");
  }
}

console.log(Calculator.result);

Calculator.add(9);
console.log(Calculator.result);

Calculator.sub(3);
console.log(Calculator.result);

Calculator.mul(3);
console.log(Calculator.result);

Calculator.div(3);
console.log(Calculator.result);
