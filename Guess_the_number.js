let rand = Math.ceil((Math.random() * 100));
let guess=2;
let result = "";
console.log(`Random num is ${rand}`);
if (guess===rand) console.log('Correct Bro');
else if(guess<rand) console.log('Less Than');
else console.log('Greater Than');
