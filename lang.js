const translations = {
  en: {
    title: "CyberSecure Encryptor",
    aesSection: "AES Encryption",
    rsaSection: "RSA Encryption",
    encrypt: "Encrypt",
    decrypt: "Decrypt",
    placeholder: "Enter your message..."
  },
  ha: {
    title: "Na’urar Tsaro Mai Ƙarfafawa",
    aesSection: "Kariyar AES",
    rsaSection: "Kariyar RSA",
    encrypt: "Lulluɓa",
    decrypt: "Fassara",
    placeholder: "Rubuta saƙonka..."
  },
  yo: {
    title: "Olùfipamọ Ayelujara",
    aesSection: "Ìfipamọ AES",
    rsaSection: "Ìfipamọ RSA",
    encrypt: "Ìfipamọ",
    decrypt: "Ìtúpalẹ",
    placeholder: "Tẹ ifiranṣẹ rẹ nibi..."
  },
  ig: {
    title: "Ngwa Nchekwa Cyber",
    aesSection: "Nche AES",
    rsaSection: "Nche RSA",
    encrypt: "Zoo",
    decrypt: "Weta",
    placeholder: "Tinye ozi gị ebe a..."
  }
};

function setLanguage(lang) {
  const t = translations[lang];
  document.querySelector("h1").innerText = t.title;
  document.querySelectorAll("section")[0].querySelector("h2").innerText = t.aesSection;
  document.querySelectorAll("section")[1].querySelector("h2").innerText = t.rsaSection;
  document.querySelectorAll("button")[0].innerText = t.encrypt;
  document.querySelectorAll("button")[1].innerText = t.decrypt;
  document.getElementById("aesPlain").placeholder = t.placeholder;
}
