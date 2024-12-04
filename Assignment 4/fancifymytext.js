const biggerButton = document.getElementById('biggerButton');
const capitalButton = document.getElementById('capitalButton');
const textArea = document.getElementById('textArea');
const fancyButton = document.getElementById('fancy');
const boringButton = document.getElementById('boring');

biggerButton.addEventListener('click', function () {
    textArea.style.fontSize = '1.5rem';
});

capitalButton.addEventListener('click', function() {
    var textString = textArea.value;
    var words = textString.split(" ");
    for (var i = 0; i < words.length; i++) {
        if (words[i].indexOf('.') != -1) {
            // If code reaches this point, then words[i] contains a period.
            // Errors could occur with strings that have periods not at the end of sentences.
            var parts = words[i].split('.');
            console.log(parts);
            // Not sure if period should be before or after the moo; assuming after based
            // off prompt from assignment 4 on canvas.
            parts[0] += ' -Moo.';
            words[i] = parts.join('');
        }
    }
    textArea.value = words.join(' ');
    textArea.value = textArea.value.toUpperCase();
})

fancyButton.addEventListener('change', function() {
    if (fancyButton.checked) {
        textArea.style.color = 'blue';
        textArea.style.textDecoration = 'underline';
        textArea.style.fontWeight = bold;
    }
});

boringButton.addEventListener('change', function () {
    if (boringButton.checked) {
        textArea.style.fontWeight = null;
        textArea.style.fontSize = '1rem';
        textArea.style.color = null;
        textArea.style.textDecoration = null;
    }
});