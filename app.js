// function pow(x, n) {
//     if (n < 0) {
//         alert("Negative 'n' not supported");
//     }
//     else {
//         let result = 1;
//         for (let i = 0; i < n; i++) {
//             result *= x;
//         }
//         return rezult;
//     }

// }

document.body.onkeyup = function (e) {
    if (e.keyCode === 13) item();
}

function item() {
    const item = document.getElementById("input").nodeValue;
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    li.appendChild(ducument.createTextNode("-" + item));
    ul.appendChild(li);
    document.getElementById("input").value = "";
    li.onclick = removeItem;
}

function removeItem(e) {
    e.target.parentElement.removeChild(e.target);
}