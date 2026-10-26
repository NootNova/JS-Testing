
console.log("JavaScript file is up and running!" )

function checkValue(enteredValue) {

    const message = document.getElementById("message");

    const input = document.getElementById("numberInput");

    const inputValue = input.value.trim();

    //const trueValue = inputValue;

    if (inputValue === "") return message.textContent = "Please enter a number."

    const trueValue = Number(inputValue);

    //if (trueValue === "") return message.textContent = "Please enter a number."

    if (!Number.isFinite(trueValue)) {

        message.textContent = "Entered number is not finite.";
    
    } else {

        message.textContent = "Entered number is finite."
    }

}
