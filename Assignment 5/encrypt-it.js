(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log("Window loaded!");

    const encryptButton = document.getElementById('encrypt-it');
    const resetButton = document.getElementById('reset');

    encryptButton.addEventListener('click', handleEncryption);
    resetButton.addEventListener('click', handleReset);
  }

  function handleEncryption() {
    const textArea = document.getElementById('input-text');
    const resultText = document.getElementById('result');
    let text = textArea.value.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    resultText.textContent = result;
  }

  function handleReset() {
    const textArea = document.getElementById('input-text');
    textArea.value = "";
  }

})();
