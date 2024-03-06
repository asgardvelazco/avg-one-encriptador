function textEncoder(input) {
    let encodedText = "";
    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i);
        let encodedCharCode = charCode + 5;
        let encodedChar = String.fromCharCode(encodedCharCode);
        encodedText += encodedChar;
    }
    return encodedText;
}

function textDecoder(input) {
    let decodedText = "";
    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i);
        let decodedCharCode = charCode - 5;
        let decodedChar = String.fromCharCode(decodedCharCode);
        decodedText += decodedChar;
    }
    return decodedText;
}

function encodeText() {
    let inputText = document.getElementById("inputText").value;
    let encodedText = textEncoder(inputText);
    document.getElementById("outputText").value = encodedText;
}

function decodeText() {
    let inputText = document.getElementById("inputText").value;
    let decodedText = textDecoder(inputText);
    document.getElementById("outputText").value = decodedText;
}

function copyToClipboard() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    navigator.clipboard.writeText(outputText.value);
}
