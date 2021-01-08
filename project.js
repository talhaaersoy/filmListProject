const titleValue = document.getElementById("title");
const directorValue = document.querySelector("#director");
const urlValue = document.getElementById("url");
const form = document.getElementById("film-form");
const body = document.querySelectorAll(".card-body")[1];






eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener ("DOMContentLoaded",function(){
    let films = Storage.getFilmsFromStorage();
    UI.loadAllFilms(films);
  })
  body.addEventListener("click",deleteFilm);


}


function addFilm(e) {
  const title = titleValue.value;
  const director = directorValue.value;
  const url = urlValue.value;
  let a;
  const filmList = Storage.getFilmsFromStorage("films");
  const control  = filmList.map(function (element) {
    if (element.title.toLowerCase() === title.toLowerCase()){
      return a = true
    }
    }) ;
    
  console.log(control);
  console.log(title);
  console.log(a);
  
  if (title === "" || director === "" || url === "") {
    UI.displayMessage("Lütfen tüm alanları doldurunuz!","danger");

  } 
  else if (a === true){
    UI.displayMessage("Aynı filmi iki kez yükleyemezsiniz!","danger");
  }

  else {
    const newFilm = new Film(title, director, url);
    UI.displayMessage("Fİlm Başarıyla Eklendi","success");
    Storage.addFilmsToStorage(newFilm);
    UI.addFilmToUI(newFilm); 
    
  }
  UI.clearInputs(titleValue,directorValue,urlValue);

  e.preventDefault();
}
function deleteFilm (e){
  if(e.target.id === "delete-film" ){
    UI.deleteFilmFromUI(e.target.parentElement.parentElement);
    Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
  }
  else if (e.target.id === "clear-films"){
    UI.deleteAllFromUI ();
    Storage.deleteAllFromStorage();
  }
} 

