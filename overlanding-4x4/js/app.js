var Language;
(function (Language) {
    Language["spanish"] = "Spanish";
    Language["english"] = "English";
    Language["russian"] = "Russian";
})(Language || (Language = {}));
var changeBtn = document.querySelector("#idioma");
var changeTitle = document.querySelector("#titulo");
var language = Language.spanish;
changeBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(changeBtn.textContent);
    if (language == Language.spanish) {
        //Changes to Russian
        language = Language.russian;
        changeBtn.innerText = "ENGLISH";
        changeTitle.innerText = "ПОЕЗДКИ НА ВНЕДОРОЖНИКАХ 4X4";
    }
    else if (language == Language.russian) {
        //Changes to English
        language = Language.english;
        changeBtn.innerText = "ESPAÑOL";
        changeTitle.innerText = "TRAVEL OVERLANDING 4X4";
    }
    else if (language == Language.english) {
        //Changes to Spanish
        language = Language.spanish;
        changeBtn.innerText = "РУССКИЙ";
        changeTitle.innerText = "VIAJES OVERLANDING 4X4";
    }
    console.log(language);
});
