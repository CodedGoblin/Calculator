// global Variables
let a = '';
let b = '';
let op = '';
let result = '';
let displayValue = '_ _ _';

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
    return b==0 ? alert('You can not divide by zero!') : a/b;
}


// operate takes (a,b,opeator) and returns result
const operate = (a,b,operator)=>{
    const result = operator(a,b);
    return result;
};


// Populate the display with the buttons pressed eg: 1 + 2 
// Save first value as 'a', save operator chosen, and save second value as 'b'
    // Digit Functionality
digits.forEach(digit=>{
    digit.addEventListener('click', ()=>{
        if(!op){
            a += digit.textContent;
            displayValue = a;
        } else{
            b += digit.textContent;
            displayValue = b;
        }
        view(displayValue);
    });
});
    // Operation Functionality
operators.forEach(operator =>{
    operator.addEventListener('click', ()=>{
        op = operator.textContent;
        if(!b == ''){
            result = operate(Number(a),Number(b),select(op));
            a = result;
            displayValue = a;
            b = ''
        }
        view(displayValue);
    })
})

    // Equal Func
equal.addEventListener('click', ()=>{
    result = operate(Number(a),Number(b),select(op));
    displayValue = result;
    view(result)
    a = result;
    b = '';
    result = '';  
})

    // Clear Functionality
clear.addEventListener('click', ()=>{
    displayValue = '_ _ _';
    a = '';
    b = '';
    op = '';
    result = '';
    view(displayValue);
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
          :op == '/' ? divide : '';
};
