let nums=[1,2,3,4,5,6,7,8,9,10];

console.log(nums);

let arr=nums.map((x)=>x*=2);

console.log(`The array with multiple by 2 in each element is ${arr}`);

let array=nums.map((x)=>x+=2);

console.log(`The array with addition 2 in each element is ${array}`);