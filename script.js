const btn = document.querySelector("button");
const input = document.querySelector("input");
const output = document.querySelector("#output");
const romanNumbers = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
];

// Convert number to Roman numerals
const toRoman = (num) => {
    if (num <= 0) {
        return null;
    }
    let result = '';
    for (let [value, numeral] of romanNumbers) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }
    return result;
};

// Function to handle conversion
const convert = () => {
    const num = parseInt(input.value, 10);
    if (!num) {
        output.innerHTML = `
            <div class="output-container">
                <p style="font-size: 1.5rem">Please enter a valid number</p>
            </div>`;
    } else if (num <= 0) {
        output.innerHTML = `
            <div class="output-container">
                <p style="font-size: 1.5rem">Please enter a number greater than or equal to 1</p>
            </div>`;
    } else if (num >= 4000) {
        output.innerHTML = `
            <div class="output-container">
                <p style="font-size: 1.5rem">Please enter a number less than or equal to 3999</p>
            </div>`;
    } else {
        const romanNumeral = toRoman(num);
        output.innerHTML = `
            <div class="output-container">
                <p style="font-size: 3rem;">${romanNumeral}</p>
            </div>`;
    }
    input.value = "";
};

// Event listeners for input and button
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        convert();
    }
});

btn.addEventListener("click", convert);
