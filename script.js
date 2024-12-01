const btn = document.querySelector("button");
const input = document.querySelector("input");
const output = document.querySelector("#output");

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
    } else if (input.value >= 4000) {
        output.innerHTML = `
        <div class="output-container">
            <p style="font-size: 2rem" id="output">Please enter a number less than or equal to 3999</p>
        </div>
    `;
    } else {output.innerHTML = `
    <div class="output-container">
        <p id="output">${input.value}</p>
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