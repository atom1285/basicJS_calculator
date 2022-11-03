function getResult() {

    //*form
    const number1 = parseFloat(document.getElementById('num1').value);
    const number2 = parseFloat(document.getElementById('num2').value);

    const operation = document.getElementById('operation_select').value;

    switch (operation) {
        case 'add':
            result = number1 + number2;
            console.log('add', result);
            break;
        case 'sub':
            result = number1 - number2;
            console.log('sub', result);
            break;
        case 'mul':
            result = number1 * number2;
            console.log('mul', result);
            break;
        case 'div':
            result = number1 / number2;
            console.log('div', result);
            break;
    }

    document.getElementById('result').value = result;

}

function tryToAutomaticallyCalcaulate() {
    if (document.getElementById('num1').value && document.getElementById('num2').value) {
        getResult();
    }
}

function setOperationColor(operation, website_load = false) {

    if (website_load == true) {
        operation = document.getElementById('operation_select').value;
    }

    let color;

    //a switch statement to determine bg color based on operation
    switch (operation) {
        case 'add':
            color = 'limegreen';
            break;
        case 'sub':
            color = 'red';
            break;
        case 'mul':
            color = 'blue';
            break;
        case 'div':
            color = 'yellow';
            break;
    }

    document.getElementById('operation_select').style.backgroundColor = color;

}

function setOperation(operation) {
    document.getElementById('operation_select').value = operation; 
    tryToAutomaticallyCalcaulate();
    setOperationColor(operation);
}

function setOperationAdd() {
    setOperation('add');
}

function setOperationSub() {
    setOperation('sub');
}

function setOperationMul() {
    setOperation('mul');
}

function setOperationDiv() {
    setOperation('div');
}

//!website refresh
window.onload = function () {
    setOperationColor(null, true);
}