//Q1

let nums=[1,2,3,4,5,6];

let a=prompt("Enter a number");
a=Number.parseInt(a);
nums.push(a);
console.log(nums);

//Q2

let arr=[];
let number;
do{
    number=prompt("Enter a number");
    number=Number.parseInt(number);
    arr.push(number);
}while(number!=0);
console.log(arr);


//Q3

let nums1=[10,2,12,20,30,40,50,6];
let res=nums1.filter((x)=>x%10===0);
console.log(res);

//Q4

let nums2=[];
let i=1;
while(i<=10){
    nums2.push(i);
    i++;
}
let res1=nums2.map((x)=>x*x);
console.log(res1);

//Q5

let nums3=[1,2,3,4,5];
let ans;
ans=nums3.reduce((x,y)=>x*y);

console.log(ans);