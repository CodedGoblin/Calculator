// global Variables
let a = '';
let b = '';
let op = '';
let result = 0;


// Selections
const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');


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
    const result = operator(a,b);
    return result;
};


// Populate the display with the buttons pressed 
// Save first value as 'a', save operator chosen, and save second value as 'b'
    // Digit Functionality
digits.forEach(digit=>{
    digit.addEventListener('click', ()=>{
        view('');
        if(!op){
            a += digit.textContent;
            view(a);
        } else{
            b += digit.textContent;
            result = parseFloat(operate(Number(a),Number(b),select(op)).toFixed(2));
            a = result;
            view(b);
        }
    });
});


    // Operation Functionality
operators.forEach(operator =>{
    operator.addEventListener('click', ()=>{
        view(checkInfinity(result)); 
        op = operator.textContent;
        if(!a){
            op = '';
        }else{
            if(!b == ''){
                b = ''
                view(result);
            }else{
                result = a;
                view(result);
            }
        }
    })
})

    // Equal Func
equal.addEventListener('click', ()=>{ 
    if(!a){
        view(0);
    }
    view(checkInfinity(result));   
})

    // Clear Functionality
clear.addEventListener('click', ()=>{
    a = '';
    b = '';
    op = '';
    result = '';
    view(0);
})



// Utility functions
    // Display Functionality
const view = (value)=>{
    display.textContent = value;
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
    if (result == 'Infinity'){
        a=''
        b=''
        return 'Not Possible'

    }
    return result
}