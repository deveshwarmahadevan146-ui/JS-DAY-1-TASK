const a = 10;

function myFunction() {
  a = 20;
  console.log(a);
}

myFunction();

a = 30;

console.log(a);


/*

This code does not run because we have assigned constant variable instead of using "let" so the code shows error.