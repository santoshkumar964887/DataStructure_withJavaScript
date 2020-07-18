
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent.
 This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function Power(x,y){
    if(y==1) return x;

    return x*Power(x,y-1);
}

console.log(Power(5,2));