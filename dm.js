const result = document.querySelector("#randomNumber");
const lower = document.querySelector("#lower");
const upper = document.querySelector("#upper");
const generate = document.querySelector("#generate");
const clear = document.querySelector("#clear");
const form = document.querySelector("#randomForm");

form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    let min = parseInt(lower.value, 10);
    let max = parseInt(upper.value, 10);

        if (!isNaN(min) && !isNaN(max) && min < max) {
            let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            result.textContent = randomNum;
            console.log(randomNum);
        } else {
            result.textContent = "Error: Invalid Range";
        }
    });

    clear.addEventListener("click", function () {
        lower.value = "";
        upper.value = "";
        result.textContent = ""; 
    });
