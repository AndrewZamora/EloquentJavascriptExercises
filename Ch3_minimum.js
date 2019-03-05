// The previous chapter introduced the standard function Math.min that returns
// its smallest argument. We can do that ourselves now. Write a
// function min that takes two arguments and returns their minimum
function min(numA,numB){
    if(numA > numB){
        return numB
    }else {
        return numA
    }
}

console.log(min(3,5));
console.log(min(-2,0));
console.log(min(0,-2));
console.log(min(20,-46));
