const list = document.querySelector(".list");
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", async function(evt){
    evt.preventDefault();
    var tut = input.value.trim();

    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=e935560c&s=${tut}`);
    const data = await response.json();

    if(data.Response === 'True') {
        RenderPost(data.Search, list);
    }
});


function RenderPost(array, node) {
    node.innerHTML = null;

    array.forEach(element => {
        const newLi = document.createElement('li');
        newLi.textContent = element.Title;
        node.appendChild(newLi);
    });
}

// let username = "diyor"
//     username = "SUNNATILLO"
// console.log(username);