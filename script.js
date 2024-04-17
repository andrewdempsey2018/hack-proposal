// convert to decimal
decimalValue = 0;

document.getElementById("decimalResult").innerHTML = "waiting for your input";

convertToDecimal = () => {
    hexValue = document.getElementById("hexinput").value;
    decimalValue = parseInt(hexValue, 16);
    document.getElementById("decimalResult").innerHTML = "Result = " + decimalValue;
}

document.getElementById("buttonToDecimal").addEventListener("click", convertToDecimal);

// convert to hex
hexResult = 0;
decimalInput = "";
decimalInputasInt = 0;

document.getElementById("hexResult").innerHTML = "waiting for your input";

convertToHex = () => {
    decimalInput = document.getElementById("decimalInput").value;
    decimalInputasInt = parseInt(decimalInput);
    hexResult = decimalInputasInt.toString(16);
    document.getElementById("hexResult").innerHTML = "Result = " + hexResult;
}

document.getElementById("buttonToHex").addEventListener("click", convertToHex);