

    /* Задание на урок:

    1) Первую часть задания повторить по уроку

    2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
    false - выводит в консоль главный объект программы

    3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
    "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
    genres

    P.S. Функции вызывать не обязательно*/



    // Код возьмите из предыдущего домашнего задания






'use strict';

    let numberOfFilms;
    // let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?').replace(/\D/g, "");

    function start() {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
        
        while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    }
    // start();

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };  


    function rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            const movieWatched = prompt('Один из последних просмотренных фильмов?'),
                  movieRating = prompt('На сколько оцените его?');
            
            if(movieWatched != null && movieRating != null && movieWatched != '' && movieRating != '' && movieWatched.length < 50){
                personalMovieDB.movies[movieWatched] = movieRating;
                console.log('Ok');
            }else{
                console.log('Error');
                i--;
            }
    
        }
    }
    // rememberMyFilms();


    function detectPersonaLevel() {
        if(personalMovieDB.count < 10){ //Less 10
            console.log("Просмотрено довольно мало фильмов");
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){  //More 10 but less 30
            console.log("Вы классический зритель");
        }else if(personalMovieDB.count >= 30){ //More 30
            console.log("Вы киноман");
        }else{
            console.log("Произошла ошибка");
        }
    }
    // detectPersonaLevel();


    
    function showMyDB(privat) {
        if(!privat){
            console.log(personalMovieDB);
        }
    }

    showMyDB(personalMovieDB.privat);

    function writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            let genr = prompt(`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres[i - 1] = genr;
        }
    }
    // writeYourGenres();