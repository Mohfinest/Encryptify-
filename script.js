// AES Logic
function encryptAES() {
  let text = document.getElementById("aesPlain").value;
  let key = document.getElementById("aesKey").value;
  let encrypted = CryptoJS.AES.encrypt(text, key).toString();
  document.getElementById("aesCipher").value = encrypted;
}

function decryptAES() {
  let encrypted = document.getElementById("aesCipher").value;
  let key = document.getElementById("aesKey").value;
  let decrypted = CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8);
  document.getElementById("aesPlain").value = decrypted;
}

// RSA Logic
let rsaKeypair;

function generateRSAKeys() {
  rsaKeypair = forge.pki.rsa.generateKeyPair({ bits: 1024, e: 0x10001 });
  alert("RSA keys generated in memory.");
}

function encryptRSA() {
  let text = document.getElementById("rsaPlain").value;
  if (!rsaKeypair) generateRSAKeys();
  let encrypted = rsaKeypair.publicKey.encrypt(text);
  document.getElementById("rsaCipher").value = forge.util.encode64(encrypted);
}

function decryptRSA() {
  let encrypted = forge.util.decode64(document.getElementById("rsaCipher").value);
  let decrypted = rsaKeypair.privateKey.decrypt(encrypted);
  document.getElementById("rsaPlain").value = decrypted;
}

// Save/Load Encrypted Text
function saveEncryptedText() {
  const content = document.getElementById("aesCipher").value;
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "encrypted.txt";
  link.click();
}

function loadEncryptedText() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".txt";
  input.onchange = (e) => {
    const reader = new FileReader();
    reader.onload = function() {
      document.getElementById("aesCipher").value = reader.result;
    };
    reader.readAsText(e.target.files[0]);
  };
  input.click();
}

// File Encryption
function encryptFile() {
  const file = document.getElementById("fileInput").files[0];
  const key = prompt("Enter AES key:");
  const reader = new FileReader();
  reader.onload = function() {
    const encrypted = CryptoJS.AES.encrypt(reader.result, key).toString();
    const blob = new Blob([encrypted], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.getElementById("downloadLink");
    link.href = url;
    link.download = file.name + ".enc";
    link.innerText = "Download Encrypted File";
    link.style.display = "block";
  };
  reader.readAsText(file);
}

function decryptFile() {
  const file = document.getElementById("fileInput").files[0];
  const key = prompt("Enter AES key:");
  const reader = new FileReader();
  reader.onload = function() {
    const decrypted = CryptoJS.AES.decrypt(reader.result, key).toString(CryptoJS.enc.Utf8);
    const blob = new Blob([decrypted], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.getElementById("downloadLink");
    link.href = url;
    link.download = file.name.replace(".enc", ".txt");
    link.innerText = "Download Decrypted File";
    link.style.display = "block";
  };
  reader.readAsText(file);
}

// Text-to-Speech
function speakText() {
  const text = document.getElementById("aesPlain").value;
  const msg = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(msg);
}
