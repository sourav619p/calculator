//1 display number in text box
function displayNumber(num){
    result.value+=num;
}

//2 clear text box
function clearBox(){
    result.value="";
}

//3 evaluate expression
function evaluateExpression(){
    // expression=result.value;
    // output=eval(expression);
    // result.value=output;
    result.value=eval(result.value)
}