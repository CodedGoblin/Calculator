/////////// global Variables /////////////////////////////
let a = 0;
let b = '';
let op = '';
let result = 0;
/////////////////////////////////////////////////////////////




////////// Selections ///////////////////////////////////////
const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const decimal = document.querySelector('#decimal');
const del = document.querySelector('#delete');
////////////////////////////////////////////////////////////


//// Math ///////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////


//////// Functionality //////////////////////////////////////////////
const insertDigit = (source)=>{
    if(!op == ''){
        b += source;
        view(b);
    }else{
        a += source;
        view(a);
    }        
};
    // Digit Functionality
digits.forEach(digit=>{
    digit.addEventListener('click', ()=>{
         insertDigit(digit.textContent);
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
const insertOperator = (source)=>{
    op = source;
    if(!b.length == 0){
     result = parseFloat(operate(a,b,select(op)).toFixed(2));
     view(checkInfinity(result));
     a = result;
     b = '';
    }
};
operators.forEach(operator =>{
    operator.addEventListener('click', ()=>{
      insertOperator(operator.textContent);
    })
});

    // Equal Func
const getResult = ()=>{
    if(b === '' ){ // safety in case the equal is pressed before op and b are assigned
        view(a)
    }else{
        result = parseFloat(operate(a,b,select(op)).toFixed(2));
        view(checkInfinity(result));
        a = result;
        b = '';
        op = '';  
    }
};
equal.addEventListener('click', ()=>{ 
   getResult();
});

    // Clear Functionality
const reset = ()=>{
    a = 0;
    b = '';
    op = '';
    result = '';
    view(a);
};
clear.addEventListener('click', ()=>{
    reset();
});


    // Backspace Functionality
const backspace = ()=>{
    let arr = [];
    if(op == ''){
        arr = Array.from(a.toString());
        arr.pop();
        a = arr.join('');
        if(arr.length == 0){
            a = 0;
        }
        view(a);
    }else{
        arr = Array.from(b.toString());
        arr.pop();
        b = arr.join('');
        if(arr.length == 0){
            b = 0;
        }
        view(b);
    }
};
del.addEventListener('click', ()=>{
    backspace();
});

// check dot
const insertDot = ()=>{
    if(!a.toString().includes('.')){
        a+='.'; 
        view(a);
    } 
    if(!op == '' && !b.includes('.')){
        b+='.';
        view(b);
    } 
}
decimal.addEventListener('click', ()=>{
    insertDot();
})

 // Keyboard Functionality
const digitArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operatorArray = ['+', '-', '*', '/'];

document.body.addEventListener('keydown', (evt)=>{
    if(digitArray.includes(evt.key)){
        insertDigit(evt.key);
    };
    if(operatorArray.includes(evt.key)){
        evt.preventDefault();
        insertOperator(evt.key);
    };
    if(evt.key == ".") insertDot();
    if(evt.key == "Backspace") backspace();
    if(evt.key == "Delete") reset();
    if(evt.key == "Enter") getResult();
});
//////////////////////////////////////////////////////////////////////////////////




/////////////////// Utility functions ///////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////