let nums = [2, 12, 11, 5, 10, 1, 99];
let result = nums.reduce((pre,cur) => (cur % 2 === 0 ? pre * cur : pre + cur),1);
console.log(result);
// 500