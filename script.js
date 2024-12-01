const btn = document.querySelector("button");
const input = document.querySelector("input");
const output = document.querySelector("#output");
const romanNumbers = [
    { roman: "I", arabic: 1 },
    { roman: "IV", arabic: 4 },
    { roman: "V", arabic: 5 },
    { roman: "IX", arabic: 9 },
    { roman: "X", arabic: 10 },
    { roman: "XL", arabic: 40 },
    { roman: "L", arabic: 50 },
    { roman: "XC", arabic: 90 },
    { roman: "C", arabic: 100 },
    { roman: "CD", arabic: 400 },
    { roman: "D", arabic: 500 },
    { roman: "CM", arabic: 900 },
    { roman: "M", arabic: 1000 }
];

// Function that checks for input.value and gives relative output
const convert = () => {
    if (!input.value) {
        output.innerHTML = `
        <div class="output-container">
            <p style="font-size: 2rem" id="output">Please enter a valid number</p>
        </div>
    `;
    } else if (input.value <= 0) {
        output.innerHTML = `
        <div class="output-container">
            <p style="font-size: 2rem" id="output">Please enter a number greater than or equal to 1</p>
        </div>
    `;
    }  else if (input.value >= 4000) {
        output.innerHTML = `
        <div class="output-container">
            <p style="font-size: 1.7rem" id="output">Please enter a number less than or equal to 3999</p>
        </div>
    `;
    } else {output.innerHTML = `
    <div class="output-container">
        <p style="font-size: 3rem" id="output">${input.value}</p>
    </div>
    `;}
input.value = "";
}

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        convert();
    }
});

btn.addEventListener("click", convert);

const recursive = () => {
    if (input.value === "1") {
        return "I";
    }
}