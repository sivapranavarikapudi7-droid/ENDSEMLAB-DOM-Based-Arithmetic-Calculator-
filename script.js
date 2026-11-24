function calculate(operator) {

    let num1 = parseFloat(
        document.getElementById("num1").value
    );

    let num2 = parseFloat(
        document.getElementById("num2").value
    );

    let result;

    if (
        document.getElementById("num1").value === "" ||
        document.getElementById("num2").value === ""
    ) {
        document.getElementById("result").innerHTML =
            "Please enter both numbers!";
        return;
    }

    switch (operator) {

        case '+':
            result = num1 + num2;
            break;

        case '-':
            result = num1 - num2;
            break;

        case '*':
            result = num1 * num2;
            break;

        case '/':
            if (num2 === 0) {
                document.getElementById("result").innerHTML =
                    "Cannot divide by zero!";
                return;
            }
            result = num1 / num2;
            break;
    }

    document.getElementById("result").innerHTML =
        "Result: " + result;
}

function clearCalculator() {

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    document.getElementById("result").innerHTML = "Result:";
}