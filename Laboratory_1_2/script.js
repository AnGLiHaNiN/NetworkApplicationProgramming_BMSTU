// файл script.js
window.onload = function(){ 

    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
    
    // окно вывода результата
    outputElement = document.getElementById("result")
    
    // список объектов кнопок циферблата (id которых начинается с btn_digit_)
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')


    function calculate(){
        switch(selectedOperation) { 
            case 'x':
                expressionResult = (+a) * (+b)
                break;
            case '+':
                expressionResult = (+a) + (+b)
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
                break;  
        }
 
        // a = expressionResult.toString()
        // b = ''
        // selectedOperation = null
    
         

    }
    document.getElementById("btn_op_percent").onclick = function() {
        if (a == ''){
            return
        } else if(a != '' && b == ''){
            expressionResult = (+a) / (100)
            a = expressionResult.toString()
    
            outputElement.innerHTML = a
        } else {
            //a = (+a) * (+b) / (100)
            calculate()
            // expressionResult = (+a) / (100)
            //a = expressionResult.toString()
            a = (expressionResult / 100).toString()
            //a = expressionResult.toString()
            b = ''
            selectedOperation = null
    
            outputElement.innerHTML = a

        }
    }
    
    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
                a += digit
            }
            outputElement.innerHTML = a
        } else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                b += digit
                outputElement.innerHTML = b        
            }
        }
    }

    function dynamicСomputing() {
        if (selectedOperation){
            calculate()
            a = expressionResult.toString()
            b = ''
            selectedOperation = null
            outputElement.innerHTML = a 
        } 
    }
    
    // устанавка колбек-функций на кнопки циферблата по событию нажатия
    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    });

    
    
    // установка колбек-функций для кнопок операций
    document.getElementById("btn_op_mult").onclick = function() { 
        if (a === '') return
        dynamicСomputing()
        selectedOperation = 'x'
    }
    document.getElementById("btn_op_plus").onclick = function() { 
        if (a === '') return
        dynamicСomputing()
        selectedOperation = '+'
    }
    document.getElementById("btn_op_minus").onclick = function() { 
        if (a === '') return
        dynamicСomputing()
        selectedOperation = '-'
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '') return
        dynamicСomputing()
        selectedOperation = '/'
    }
    
    // кнопка очищения
    document.getElementById("btn_op_clear").onclick = function() { 
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
    }


    
    // кнопка расчёта результата
    document.getElementById("btn_op_equal").onclick = function() { 
        if (a === '' || b === '' || !selectedOperation)
            return
           
        calculate()
        a = expressionResult.toString()
        b = ''
        selectedOperation = null
        outputElement.innerHTML = a 
    }
    };