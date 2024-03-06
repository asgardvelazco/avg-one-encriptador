// Function to encode the input text
function textEncoder(input) {
    let encodedText = "";
    // Loop through each character in the input text
    for (let i = 0; i < input.length; i++) {
        // Get the character code of the current character
        let charCode = input.charCodeAt(i);
        // Add a specific offset to each character code (e.g., add 1 for encoding)
        let encodedCharCode = charCode + 5;
        // Convert the encoded character code back to a character
        let encodedChar = String.fromCharCode(encodedCharCode);
        // Append the encoded character to the encoded text
        encodedText += encodedChar;
    }
    // Return the encoded text
    return encodedText;
}

// Function to decode the input text
function textDecoder(input) {
    let decodedText = "";
    // Loop through each character in the input text
    for (let i = 0; i < input.length; i++) {
        // Get the character code of the current character
        let charCode = input.charCodeAt(i);
        // Subtract the same offset applied during encoding to decode the character
        let decodedCharCode = charCode - 5;
        // Convert the decoded character code back to a character
        let decodedChar = String.fromCharCode(decodedCharCode);
        // Append the decoded character to the decoded text
        decodedText += decodedChar;
    }
    // Return the decoded text
    return decodedText;
}

// Function to encode the text when the "Encode" button is clicked
function encodeText() {
    // Get the input text from the input textarea
    let inputText = document.getElementById("inputText").value;
    // Encode the input text using the textEncoder function
    let encodedText = textEncoder(inputText);
    // Display the encoded text in the output textarea
    document.getElementById("outputText").value = encodedText;
}

// Function to decode the text when the "Decode" button is clicked
function decodeText() {
    // Get the input text from the input textarea
    let inputText = document.getElementById("inputText").value;
    // Decode the input text using the textDecoder function
    let decodedText = textDecoder(inputText);
    // Display the decoded text in the output textarea
    document.getElementById("outputText").value = decodedText;
}

// Function to copy the encoded text to the clipboard when the "Copy Encoded Text" button is clicked
function copyToClipboard() {
    // Get the output textarea containing the encoded text
    let outputText = document.getElementById("outputText");
    // Select the text inside the textarea
    outputText.select();
    // Copy the selected text to the clipboard
    // document.execCommand("copy");
    navigator.clipboard.writeText(copyText.value);
}
