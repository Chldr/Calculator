
let result = 0;
let inputNumber = "0";
let previousOperator = "+";
const screen = document.querySelector(".screen");

function main() {
    document.querySelector(".buttons").addEventListener("click", function(){
        buttonClick(event.target.innerText);
    });
}

main()

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        doSymbols(value); // 处理所有不是数字的符号
    } else {
        doNumber(value); // 处理数字
    }
    outputToScreen()

}

function doNumber(value) {       //缓存数字
    if (inputNumber === "0") {
        inputNumber = value;
    } else {
        inputNumber += value;
    }
}

function operationChoice(intNumber) {   //简单计算部分
    if (previousOperator === "+") {
        result += intNumber;
    } else if (previousOperator === "-") {
        result -= intNumber;
    } else if (previousOperator === "×") {
        result *= intNumber;
    } else if (previousOperator === "÷") {
        result /= intNumber;
    }
}

function doMath(value) {   //考虑到最开始输入数字的计算
    if (inputNumber === "0") {
        return;
    }

    const intNumber = parseInt(inputNumber);
    if (result = 0) {   //正在输入第一个number
        result = intNumber;
    } else {
        operationChoice(intNumber);
    }

    previousOperator = value; //存储运算符 只有输入“=”时运算才结束
    inputNumber = "0"; //如果已经输过一个数，需要将第一个数归零然后输第二个数
}

function doSymbols(value) { // 处理所有符号
    switch (value) {
        case "C":
            inputNumber = "0";
            previousOperator = "+";
            result = 0;
            break;
        case "=":
            operationChoice(parseInt(inputNumber));

            previousOperator = "+"; //清除输入的运算符
            inputNumber = String(result); //把 result 变成字符串赋给 inputNumber

            break;
        case "⬅︎":
            if (inputNumber.length === 1) {
                inputNumber = "0";
            } else {
                inputNumber = inputNumber.substring(0, inputNumber.length-1);
            }
            break;
        case "+":
        case "-":
        case "×":
        case "÷":
            doMath(value);
            break;
    }
}

function outputToScreen() {
    screen.innerText = inputNumber;
}

