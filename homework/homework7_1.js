// การบ้าน #1
let arr = [1,2,3,4,5,6,7,8,9,10];
const filterArr = arr.filter(x => x % 2 === 0);
const map1 = filterArr.map(x => x * 1000);
console.log(map1);
