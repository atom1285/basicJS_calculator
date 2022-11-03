function getResult() {

    //*form
    const number1 = parseFloat(document.getElementById('num1').value);
    const number2 = parseFloat(document.getElementById('num2').value);

    const operation = document.getElementById('operation_select').value;

    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'sub':
            result = number1 - number2;
            break;
        case 'mul':
            result = number1 * number2;
            break;
        case 'div':
            result = number1 / number2;
            break;
    }

    //if result is not a number nothing will return
    if (isNaN(result)) {
        return;
    }

    document.getElementById('result').value = result;

    $('#result').css('transform', 'scale(1.15)')
    setTimeout(function () {
        $('#result'). css('transform', 'scale(1)')
    }, 200);

}

function Clear() {

    const num1 = $('#num1');
    const num2 = $('#num2');
    const result = $('#result');

    num1.val('');
    num2.val('');
    result.val('');

    num1.toggleClass('cleared');
    num2.toggleClass('cleared');
    result.toggleClass('cleared');

    setTimeout(function () {
        num1.toggleClass('cleared');
        num2.toggleClass('cleared');
        result.toggleClass('cleared');
    }, 300);

}

function tryToAutomaticallyCalcaulate() {

    if (document.getElementById('num1').value && document.getElementById('num2').value) {
        getResult();
    }
    else {
        document.getElementById('result').value = '';
    }
}

function setOperationClass(operation = document.getElementById('operation_select').value) {

    const operation_select = $('#operation_select');
    operation_select.removeClass(['add', 'sub', 'mul', 'div']);
    operation_select.addClass(operation);

    operation_select.css('transform', 'scale(1.15)')
    setTimeout(function () {
        operation_select.css('transform', 'scale(1)')
    }, 200);

}

function setOperation(operation) {
    document.getElementById('operation_select').value = operation; 
    tryToAutomaticallyCalcaulate();
    setOperationClass(operation);
}

//!website refresh
window.onload = function () {
    setOperationClass();

    document.getElementById('num1').addEventListener('input', tryToAutomaticallyCalcaulate);
    document.getElementById('num2').addEventListener('input', tryToAutomaticallyCalcaulate);    
}
