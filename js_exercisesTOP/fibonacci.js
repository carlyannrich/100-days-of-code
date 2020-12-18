// const fibonacci = (times) => {
//   let i = 0;
//   let numb = 1;

//   while (i <= times) {
//     let temp = numb + numb;
//     numb = temp;
//   }
//   i++;
// };

// fibonacci (3);

// const fibonacci = (times) => {
// if (times < 2) {

// }
// }

const fibonacci = (times) => {
  const i;
  const fib = [];
  times += 1;
  fib[0] = 0;
  fib[1] = 1;
  for (i = 2; i <= times; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  console.log(fib[times]);
};
