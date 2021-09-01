enum Language{
  spanish = "Spanish",
  english = "English",
  russian = "Russian"
}

const changeBtn = document.querySelector("#idioma")! as HTMLButtonElement;
const changeTitle = document.querySelector("#titulo")! as HTMLElement;
let language = Language.spanish;
changeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(changeBtn.textContent);
  if (language == Language.spanish) {
    //Changes to Russian
    language = Language.russian;
    changeBtn.innerText = "ENGLISH";
    changeTitle.innerText = "ПОЕЗДКИ НА ВНЕДОРОЖНИКАХ 4X4";
  } else if (language == Language.russian) {
    //Changes to English
    language = Language.english;
    changeBtn.innerText = "ESPAÑOL";
    changeTitle.innerText = "TRAVEL OVERLANDING 4X4";
  } else if (language == Language.english) {
    //Changes to Spanish
    language = Language.spanish;
    changeBtn.innerText = "РУССКИЙ";
    changeTitle.innerText = "VIAJES OVERLANDING 4X4";
  }
  console.log(language);
});