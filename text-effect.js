const containerEl = document.querySelector("p");
const careers = [
    "Freelancer",
    "Front-end Developer",
    "Programmer",
    "Student Of UPSA"
];
let careerIndex = 0;
let charIndex = 0;

updateText();

function updateText() {
    charIndex++;
    containerEl.innerHTML = `<p> A ${careers[careerIndex].slice(0,charIndex)}</p>
    `;
    if (charIndex === careers[careerIndex].length) {
        careerIndex++;
        charIndex = 0;
    }
    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 400);
};