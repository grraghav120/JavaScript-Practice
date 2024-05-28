var input = "deltax";
console.log(reverseString(input));
function reverseString(str) {
    var n=str.length;
    var result="";
    for(let i=n-1;i>=0;i--){
        result+=str[i];
    }
    return result;
}