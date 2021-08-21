"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt ("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt ("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
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
        },
    detectPersonalLevel: function() {
            if (personalMovieDB.count < 10) {
                console.log ("Просмотрено довольно мало фильмов");
            } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
                console.log ("Вы классический зритель");
            } else {
                console.log ("Вы киноман!");
            }
            },
    showMyDB: function() {
            if (personalMovieDB.private == false) {
            console.log (personalMovieDB);
        }
        },
    writeYourGenres: function(genres) {
            for (let i = 1; i <= 3; i++) {
            let gener = prompt(`Ваш любимый жанр под номером ${i}`, "");
            if (gener != null && gener != "") {
            personalMovieDB.genres[i - 1] = gener;
            } else {
                i--;
            } 
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i+1} - это ${item}`);
        });
        },
    toggleVisivleMyDB: function() {
        if (personalMovieDB.private == false) {
            personalMovieDB.private = true;
        } else {
            personalMovieDB.private = false;
        }
    }

};
// personalMovieDB.start();
// personalMovieDB.writeYourGenres();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// console.log(personalMovieDB);





// let arr = [1,2,3,4,5,6];
// arr[99] = 1;

// for (let i = 0; i < arr.length; i++)
//  {
//      console.log(arr[i]);  
// }



// // function exampleCallbackFunction (a, callback) {
// //     console.log (`Я учу: ${a}`);
// //     callback();
// // } 
// // function jopa() {
// //     console.log("Jopaa!!!!");
// // }

// exampleCallbackFunction(`JavaScript`, jopa);


//                                                        ПЕРЕБИРАЕТ КЛЮЧИ В ОБЪЕКТЕ
// let cat = {
//     name: "Tom",
//     legs: 4,
//     wool: "red",
//     head: {
//         knee: 2,
//         eyes: {
//             amount: 2,
//             color: "green",
//         }
//     }
// };
// let count = 0,
//     count2 = 0,
//     count3 = 0;   
// for (let key in cat) {
//     count++;
//     if (typeof(cat[key]) === "object") {
//         for (let i in cat[key]) {
//             count2++;
//             if (typeof(cat[key][i]) === "object") {
//                 for (let q in cat[key][i]) {
//                     count3++;
//                     console.log(`Свойство ${q} имеет значение ${cat[key][i][q]}`);
//                 }
//             } else
//             console.log(`Свойство ${i} имеет значение ${cat[key][i]}`);
//         }
//     } else
//     console.log(`Свойство ${key} имеет значение ${cat[key]}`);
// }
// console.log(count,count2,count3);


