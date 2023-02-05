// addition
const add = (a,b)=>{
    return a+b;
};
//substraction
const substract = (a,b)=>{
    return a-b;
};
//multiplication
const multiply = (a,b)=>{
    return a*b;
};
//division
const divide = (a,b)=>{
    return b==0 ? alert('You can not divide by zero!') : a/b;
}


// operate takes (a,b,opeator) and returns result
const operate = (a,b,operator)=>{
    const result = operator(a,b);
    return result;
};



