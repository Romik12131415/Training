"use strict";
let numberOfFilms = prompt ("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

for (let i = 0; i < 2; i++) {
    let questionsOne = prompt ("Один из последних просмотренных фильмов?",""),
        questionsTwo = prompt ("На сколько оцените его?","");
        
    if (questionsOne != null && questionsOne != null && questionsOne != "" && questionsTwo != "" && questionsOne.length < 50) 
    {
        personalMovieDB.movies[questionsOne] = questionsTwo; 
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log ("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log ("Вы классический зритель");
} else {
    console.log ("Вы киноман!");
}


console.log (numberOfFilms);
console.log (personalMovieDB);