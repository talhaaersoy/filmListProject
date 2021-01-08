class Storage{
    static getFilmsFromStorage(){
        let films;
        if (localStorage.getItem("films") === null){
            films = [];
        }
        else {
            films = JSON.parse(localStorage.getItem("films"));
        }
        return films;

    }

    static addFilmsToStorage(newFilm){

        let films = this.getFilmsFromStorage();
        films.push(newFilm);
        localStorage.setItem("films",JSON.stringify(films));

    }
    static deleteFilmFromStorage(element){
        let films = this.getFilmsFromStorage();

        films.forEach((film,index) => {
            
            if (film.title === element){
                films.splice(index,1);
            }
        

        });
        localStorage.setItem("films",JSON.stringify(films));
    }
    static deleteAllFromStorage(){
        localStorage.removeItem("films")
    }

}