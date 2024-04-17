getInput = () => {
    let numbers = document.getElementById("input").value;

    // Split the string by commas and convert each substring to an integer
    numbers = numbers.split(',').map(num => parseInt(num.trim(), 10));

    document.getElementById("result").innerHTML = "Result = " + bubbleSort(numbers);
}

bubbleSort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

document.getElementById("result").innerHTML = "waiting for your input...";

document.getElementById("button").addEventListener("click", getInput);