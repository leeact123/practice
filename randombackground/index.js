const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];


const body = document.querySelector("body");
const button = document.querySelector("button");


function getRandomColors() {
   const selectColors1 = colors[Math.floor(Math.random() * colors.length)];
   const selectColors2 = colors[Math.floor(Math.random() * colors.length)];

   // html head에 style을 추가하는 방법1
//    const style = document.createElement('style');
//    style.innerHTML = `
//    body {
//     background: linear-gradient(to left, ${selectColors1}, ${selectColors2});
//    }
//    `;
//    document.head.appendChild(style);


// const style = document.createElement('style');
// document.head.appendChild(style);
// style.sheet.insertRule(`body { background: linear-gradient(to left, ${selectColors1}, ${selectColors2});}`);
// }


//css staylesheet에 추가하는방법
const sheet = new CSSStyleSheet();
sheet.replaceSync(`body { background: linear-gradient(to left, ${selectColors1}, ${selectColors2});}`);
document.adoptedStyleSheets = [sheet];


}
button.addEventListener("click", getRandomColors);