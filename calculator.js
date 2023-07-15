let expression = "";
  var a=null;var b=null;var c=null;

function appendNumber(number) {
  expression += number;
  updateDisplay();
}

function appendOperator(operator) {
  a=expression;
  expression = operator;

b=operator;
  updateDisplay();
  expression="";

}


function clearInput() {
  console.log("ac is click",expression);
  a=null;b=null;c=null;
  expression = "";
  updateDisplay();
  result=null;
}

function clear1() {
  console.log("clear is clicked");
  expression = expression.slice(0, -1);
  
  updateDisplay();

}

function calculate() {
  c=expression;
  
     expression =eval(a+b+c);
    var result=expression;

    
    
    expression = result;
    if (result === Infinity || result === -Infinity) {
      expression = "Error";
    } else {
      expression = result.toString();
    }
    updateDisplay();
  
/*
  catch (error) {
    expression = "Error";
    updateDisplay();
  }*/
}

function updateDisplay() {
  document.getElementById("input").value = expression;
}
