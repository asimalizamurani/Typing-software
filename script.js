const paragraphText = "The quick brown fox jumps over the lazy dog.";
const paragraph = document.getElementById('paragraph');
const inputArea = document.getElementById('inputArea');
const result = document.getElementById('result');

const words = paragraphText.split(' ');
let currentWordIndex = 0;

function updateParagraphDisplay() {
    paragraph.innerHTML = words.map((word, index) => {
        if (index === currentWordIndex) {
            return `<span class="highlight">${word}</span>`;
        }
        return word;
    }).join(' ');
}

inputArea.addEventListener('input', () => {
    const typedText = inputArea.value.trim();
    const typedWords = typedText.split(' ');

    if (typedWords[typedWords.length - 1] === words[currentWordIndex]) {
        currentWordIndex++;
        inputArea.value = typedWords.join(' ') + ' ';
    } else if (typedWords.length - 1 < currentWordIndex) {
        currentWordIndex = typedWords.length - 1;
    }

    updateParagraphDisplay();

    if (typedText === paragraphText) {
        result.innerText = 'Correct!';
    } else {
        result.innerText = '';
    }
});

updateParagraphDisplay();
