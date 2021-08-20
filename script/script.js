"use strict";
let numberOfFilms;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

let cat = {
    name: "Tom",
    legs: 4,
    wool: "red",
    head: {
        knee: 2,
        eyes: {
            amount: 2,
            color: "green",
        }
    }
};

for (let key in cat) {
    if (typeof(cat[key]) === "object") {
        for (let i in cat[key]) {
            if (typeof(cat[key][i]) === "object") {
                for (let q in cat[key][i]) {
                    console.log(`Свойство ${q} имеет значение ${cat[key][i]}`);
                }
            } else
            console.log(`Свойство ${i} имеет значение ${cat[key][i]}`);
        }
    } else
    console.log(`Свойство ${key} имеет значение ${cat[key]}`);
}



function showMyDB() {
    if (personalMovieDB.private == false) {
        console.log (personalMovieDB);
    }
}



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log ("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log ("Вы классический зритель");
    } else {
        console.log ("Вы киноман!");
    }
    }

function rememberMyFilms() {
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
}

function start() {
    numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");
    }
}

function exampleCallbackFunction (a, callback) {
    console.log (`Я учу: ${a}`);
    callback();
} 
function jopa() {
    console.log("Jopaa!!!!");
}

exampleCallbackFunction(`JavaScript`, jopa);

function writeYourGenres(genres) {
    for (let i = 1; i <= 3; i++) {
    let question = prompt(`Ваш любимый жанр под номером ${i}`, "");
    personalMovieDB.genres[i - 1] = question;
}
}