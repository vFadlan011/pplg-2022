/* 
<li>
          <a class="tugas" href="./tugas_list/index.html">
            Tugas List
            <span class="date">Rabu, 3 Agustus 2022</span>
          </a>
        </li>
*/

function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = date + " " + month + " " + year + " ";
  return time;
}

let unorderedListTemp = ``;

data.forEach((element) => {
  let elementString = `
    <li>
        <a class="tugas" href="${element.filePath}">
          ${element.title}
          <span class="date">${timeConverter(element.date)}</span>
        </a>
    </li>
    `;
  unorderedListTemp += elementString;
});

let htmlUL = document.querySelector(".content ul");
htmlUL.innerHTML += unorderedListTemp;
