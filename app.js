const liste = document.querySelector(".liste");
const btn = document.querySelector(".btn");

// Code avec appel XHR
const xhr = new XMLHttpRequest();

btn.addEventListener("click", () => {
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.onload = function () {
    // Vérif. : L'appel XHR renvoit bien un fichier JSON (présence de guillemets) //
    console.log(xhr.response);
    // Vérif. : On vient convertir le fichier JSON en JS par la méthode JSON.parse //
    console.log(JSON.parse(xhr.response));

    for (i = 0; i < xhr.response.length; i++) {
      let newLi = document.createElement("li");
      let newTitleCard = document.createElement("h2");
      let newBodyCard = document.createElement("p");
      newTitleCard.innerText = JSON.parse(xhr.response)[i].title;
      newBodyCard.innerText = JSON.parse(xhr.response)[i].body;
      newLi.appendChild(newTitleCard);
      newLi.appendChild(newBodyCard);
      liste.appendChild(newLi);
    }
  };
  xhr.send();
});

/*
// Ci-après, avec la méthode FETCH()...

btn.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      for (i = 0; i < data.length; i++) {
        let newLi = document.createElement("li");
        let newTitleCard = document.createElement("h2");
        let newBodyCard = document.createElement("p");
        newTitleCard.innerText = data[i].title;
        newBodyCard.innerText = data[i].body;
        newLi.appendChild(newTitleCard);
        newLi.appendChild(newBodyCard);
        liste.appendChild(newLi);
      }
    });
});

*/
