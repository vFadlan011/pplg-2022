const container = document.querySelector(".card-container");
const codeIcon = `<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
class="w-6 h-6 dark:text-slate-300"
>
<path
fillRule="evenodd"
d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
clipRule="evenodd"
/>
</svg>`;
const globeIcon = `<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
class="w-6 h-6 dark:text-slate-300"
>
<path
d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z"
/>
</svg>`;

function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "October",
    "November",
    "Desember",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = date + " " + month + " " + year + " ";
  return time;
}

const getLabelColor = {
  LATIHAN: "label-green",
  TUGAS: "label-yellow",
  ULANGAN: "label-red",
};

const getLangColor = {
  HTML: "bg-orange-500",
  CSS: "bg-blue-500",
  Javascript: "bg-yellow-500",
};

let temp = ``;
data.forEach((element) => {
  let card = `<div class="card" id="${element.id}">`;

  let cardTitle = `
        <div class="card-title">
            <h3>${element.title}</h3>
            <span class="label ${
              getLabelColor[element.category]
            } flex items-center"><p>${element.category}</p></span>
        </div>
  `;

  let cardDesc = `
    <div class="card-desc">
        <p class="date">${timeConverter(element.date)}</p>  
        <p class="desc-text">${element.description}</p>
    </div>
  `;

  let cardLang = `
    <div class="lang-type">
        <div class="circle ${getLangColor[element.mainLang]}"></div>
        <div class="type-name">${element.mainLang}</div>
    </div>
  `;

  let cardPreview;
  if (element.haveIndex == false) {
    cardPreview = `
    <div class="preview">
        <a class="button-full" href="./browse.html">
        ${codeIcon}
        <p class="preview-text">View Code & View Web</p>
        </a>
    </div>
    `;
  } else {
    cardPreview = `
    <div class="preview">
        <a class="button-left" href="./view-code.html">
        ${codeIcon}
        <p class="preview-text">View Code</p>
        </a>

        <a class="button-right" href="${element.filePath[0].path}">
        ${globeIcon}
        <p class="preview-text">View Web</p>
        </a>
    </div>  
    `;
  }

  card += cardTitle + cardDesc + cardLang + cardPreview + `</div>`;
  temp += card;
});

container.innerHTML += temp;

const love = document.querySelector(".love");
love.addEventListener("click", (e) => {
  document.querySelector("html").classList.toggle("dark");
});
