"use strict";
let numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};
let a = prompt ("Один из последних просмотренных фильмов?",""),
    b = prompt ("На сколько оцените его?",""),
    c = prompt ("Один из последних просмотренных фильмов?",""),
    d = prompt ("На сколько оцените его?","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log (numberOfFilms);
console.log (personalMovieDB);