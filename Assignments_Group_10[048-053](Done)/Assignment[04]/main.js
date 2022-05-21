let index = 10;
let jump = 2;
let end = 0;

for (;;) {
  if(index > end) {
    if(index == 4){
      console.log(index);
      break;
    }
    else console.log(index);
  }
  index -= jump;
  // Write Your Code Here
}

/*
Output
10
8
6
4
*/