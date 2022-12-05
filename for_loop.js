let nums=[1,2,3,4,5,6,7,8];
console.log(nums);

for(let element in nums){
    console.log(element);
}
//got index as element
//but

for(let element in nums){
    console.log(nums[element]);
}
//got what each elements of nums

// now use for of loop

let arr=[1,55,99];
for(let element of arr){
    console.log(`Element of array is ${element}`);
}