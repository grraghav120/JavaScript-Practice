//Q1

let num="123";
let res=num+2;    //1232
let res1=+num+2;  //125
console.log(res);
console.log(res1);

//Q2

console.log(typeof res);
console.log(typeof res1);

//Q3

const a="raghav";

// a="raghav"; //try to changes but giv error
console.log(a);

//Q4

const student={
    'name':'nandini',
    branch:'IT',
    sem:1,
};

console.log(student);

//Q5:

const mean={
    Immigrant:"प्रवासी",
    Gossip:"गपशप",
    Spark:"चिंगारी",
    Vanish:"गायब होना",
    Passenger:"यात्री",
}
// console.log(mean);

for(let ele in mean){
    console.log(mean[ele]);
}