// numbers to be sorted
let numbers = "";

document.getElementById("result").innerHTML = "waiting for your input";

bubbleSort = () => {
    let input = document.getElementById("input").value;
    numbers = input;
    document.getElementById("result").innerHTML = "Result = " + numbers;
}

document.getElementById("button").addEventListener("click", bubbleSort);