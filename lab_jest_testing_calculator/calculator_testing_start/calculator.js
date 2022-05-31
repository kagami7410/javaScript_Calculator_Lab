const sum = function(a, b){
    return a + b;
};

const subtract = (a, b) => a - b;

const multiply = (a, b) => {
    if(( b == 0) || ( a== 0)){
        return 0;
    }

    else{
        return  a * b;
    }
   
}
const divide = (a, b) => {
    if(( b == 0) || ( a== 0)){
        return 0;
    }
    else {
        return a/b;
    }
}

const modulus = a => {

     if(a == 0){
        return 0;
    }
    else if((a % 10) <= -0){
        return(a*(-1));
    }
    else{
        return a;
    }
}

const even = a => {
    let checker = true;
    if((a % 2) === 0){
        return checker;
    } 
    else{
        return false;
    }
}

const odd = a => {
    const checker = true;
    if((a % 2) == 0){
        return false;
    } 
    return checker;
}

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
