// global Variables
let a = 0;
let b = '';
let op = '';
let result = 0;



// Selections
const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const decimal = document.querySelector('#decimal');


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
    return a/b;
}


// operate takes (a,b,opeator) and returns result
const operate = (a,b,operator)=>{
    return operator(Number(a),Number(b));
};





    // Digit Functionality
digits.forEach(digit=>{
    digit.addEventListener('click', ()=>{
        if(!op == ''){
            b += digit.textContent;
            view(b)
        }else{
            a += digit.textContent;
            view(a)
        }         
    });
});

// digit || operator : if digit=assign 'a'                      if operator=assign 'b' 
//                     press operator                           result 
//                     assign 'b'                               put result in a 
//                     op or eq                                 op or eq
//                     result                                   empty b an op
//                     put result in a                          
//                     empty b and op
//                     reset from 3rd line


    // Operation Functionality
operators.forEach(operator =>{
    operator.addEventListener('click', ()=>{
       op = operator.textContent;
       if(!b==''){
        result = parseFloat(operate(a,b,select(op)).toFixed(2));
        view(checkInfinity(result));
        a = result;
        b = '';
        op = '';
       }
    })
})

    // Equal Func
equal.addEventListener('click', ()=>{ 
    if(b == ''){ // safety in case the equal is pressed before op and b are assigned
        view(a)
    }else{
        result = parseFloat(operate(a,b,select(op)).toFixed(2));
        view(checkInfinity(result));
        a = result;
        b = '';
        op = '';  
    }
})

    // Clear Functionality
clear.addEventListener('click', ()=>{
    a = 0;
    b = '';
    op = '';
    result = '';
    view(a)
})



// Utility functions
    // Display Functionality
const view = (value)=>{
    isNaN(value) ? display.textContent = value : display.textContent = Number(value)
};

    // Select the corresponding operator
const select = (op)=>{
    return op == '+' ? add
          :op == '-' ? substract
          :op == '*' ? multiply
          :op == '/' ? divide : add;
};


    // Check for inifity
const checkInfinity = (result)=>{
    if (result == Infinity){
        a=0;
        op='';
        b='';
        return 'Not Possible';
    }
    return result
}



    // check dot

decimal.addEventListener('click', ()=>{
   if(!a.toString().includes('.')) a+='.';
   if(!op == '' && !b.includes('.')) b+='.'
})
