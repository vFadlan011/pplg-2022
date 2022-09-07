htmlCode = document.querySelector(".language-html").innerText;

htmlCode = htmlCode.replaceAll("<", "&lt;");
htmlCode = htmlCode.replaceAll(">", "&gt;");

document.querySelector(".language-html").innerHTML = htmlCode;
