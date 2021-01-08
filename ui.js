class UI {
  static addFilmToUI(newFilm){


    const filmList = document.getElementById("films");
    
    filmList.innerHTML += `
        <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> 
    `
  }
  static clearInputs(element1,element2,element3){
       element1.value = "";
       element2.value = "";
       element3.value = "";
  }
  static displayMessage(message,type){
    const card = document.querySelector(".card-body");
    const info = document.createElement("div");
    info.className = `alert alert-${type}`
    info.textContent = message;

    card.appendChild(info);

    setTimeout(function(){
      info.remove();
    },1000);
  }
  static loadAllFilms(films){
    const filmList = document.getElementById("films");

    films.forEach(element => {
      filmList.innerHTML += `
      <tr>
      <td><img src="${element.url}" class="img-fluid img-thumbnail"></td>
      <td>${element.title}</td>
      <td>${element.director}</td>
      <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr> 
      `
      ;
    });

  }
  static deleteFilmFromUI(element){
    element.remove();
  }
  static deleteAllFromUI(){
    const filmList = document.getElementById("films");
    while (filmList.firstElementChild !== null){
      filmList.firstElementChild.remove();
    }

  }
}