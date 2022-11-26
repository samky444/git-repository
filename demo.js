"use strict";
// declaring variables
let total = 0;
let i = 0;
let score = 0;

document.write(`<p>This is my first paragraph statement</p>`);

// Samuel Kiarie
//if-else statement
total = parseInt(prompt("Type in a number, any number")); // assignment
if(total== 0){// comparison expression
  document.write(`<p> if stmt- Total is equal to ${total} </p>`);
}
else if((total >1) && (total <=10)){ // range expression check
  document.write(`<p> Else if stmt- Total is equal to ${total} </p>`);
}
else{
  document.write(`<p> Else stmt- Total is equal to ${total} </p>`);
}

// While loop
while(i <= 3){ // must declare the variable for i before it starts the loop
  document.write(`<p> while loop - i is equal to ${i} </p>`);
  i++;
}
// do while loop
do {  // executes at once
  document.write(`<p> do while loop - i is equal to ${i} </p>`);
  i++;

}
while (i<=3); // test the loop afterwards

// for loop - index, expression, increment
for (i=0; i < 2; i++){
  document.write(`<p> FOR loop - i is equal to ${i} </p>`);
}
// array with a FOR loop-- For Loop is best for array
const totals = [];
totals[0] = 100;
totals[1] = 99;
totals[2] = 98;

for (i = 0; i <totals.length; i++){
  document.write(`<p> Array contents [${i}] = ${totals[i]} </p>`);
}
// FOR-IN loop
for(let i in totals){
  document.write(`<p> For-in-- Array contents [${i}] = ${totals[i]} </p>`);
}
// FOR-OF loop
for(let val of totals){
  document.write(`<p> For-of-- Array contents ${val} </p>`);

}