enum Language{
  spanish = "Spanish",
  english = "English",
  russian = "Russian"
}

const changeBtn = document.querySelector("#idioma")! as HTMLButtonElement;
const changeTitle = document.querySelector("#titulo")! as HTMLElement;
let changeTitles = [document.querySelector("#h1who"), document.querySelector("#h3who"), document.querySelector("#tituloTarjeta1"), document.querySelector("#tituloTarjeta2"), document.querySelector("#tituloTarjeta3"), document.querySelector("#tituloTarjeta4")];
let changeBodys = [document.querySelector("#cuerpoTarjeta1"), document.querySelector("#cuerpoTarjeta2"), document.querySelector("#cuerpoTarjeta3"), document.querySelector("#cuerpoTarjeta4")];
let changeSubBodys = [document.querySelector("#subCuerpoTarjeta1"),document.querySelector("#subCuerpoTarjeta2"),document.querySelector("#subCuerpoTarjeta3"),document.querySelector("#subCuerpoTarjeta4")];  
let language = Language.spanish;

changeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(changeBtn.textContent);
  if (language == Language.spanish) {
    //Changes to Russian
    language = Language.russian;
    changeToRussian(changeTitles);
  } else if (language == Language.russian) {
    //Changes to English
    language = Language.english;
    changeToEnglish(changeTitles);
  } else if (language == Language.english) {
    //Changes to Spanish
    language = Language.spanish;
    changeToSpanish(changeTitles);
  }
  console.log(language);
});

function changeToRussian(element: Element[]) {
  changeBtn.innerText = "ENGLISH";
  changeTitle.innerText = "Кто мы";
  changeTitles[0].textContent = "Кто мы";
  changeTitles[1].textContent = "Молодой брак русской девушки и венесуэльца, любителей природы, активного отдыха и социальных сетей. Мы путешествуем на тысячи и тысячи километров по всему миру, мы хотим показать, что любой человек с правильным подходом может осуществить любую мечту.";
  changeTitles[2].textContent = "Мария Витальевна Бойко-Солано";
  changeTitles[3].textContent = "Рикардо Солано";
  changeTitles[4].textContent = "УАЗ Патриот";
  changeTitles[5].textContent = "Land Rover Discovery TD5 и 300tdi";
  //First Card
  changeBodys[0].textContent = "билингвист, выпускница международных исследований, специалист по цифровому маркетингу, студентка (онлайн) магистратуры по маркетингу.";
  changeSubBodys[0].textContent = "Родилась на Дальнем Востоке (Азиатский континент, г. Хабаровск) в 4 года с семьей переехала в европейскую часть России, в Краснодарский край. Выучила испанский язык в рекордно короткие сроки в Кубанском Государственном Университете. В детстве была профессиональной танцовщицей русского народного танца. В зрелом возрасте он знакомится с Рикардо, выходит замуж. На сегодняшний день была на трех континентах (в Азии, Европе и Америке) в шестнадцати странах.";
  //Second Card
  changeBodys[1].textContent = "бакалавр бухгалтерского учета, магистр делового администрирования, увлекается фотографией.";
  changeSubBodys[1].textContent = "Родился в Латинской Америке, в городе Каракас, Венесуэла, вырос в семье, где поездки и развлекательные мероприятия на свежем воздухе были и остаются очень важными, с юных лет я занимался различными видами спорта, такими как езда на велосипеде, серфинг, бейсбол и другие на любительском уровне. Бухгалтер из Католического университета Андреса Белло, в 2015 году после посещения нескольких стран в качестве туриста, решил переехать в Россию, чтобы получить степень магистра, где познакомился с Марией. На сегодняшний день он был на четырех континентах (Америка, Африка, Азия и Европа) в 21 стране.";
  //Third Card
  changeBodys[2].textContent = "российский внедорожник, модель, широко продаваемая в России, используется в настоящее время.";
  changeSubBodys[2].textContent = "К осени 2021 года мы отправимся в путешествие с Востока на Запад по самой большой стране мира - России. Посещение ее основных городов и туристических достопримечательностей. Пляжи Черного и Каспийского морей, бескрайние саванны, замерзшие озера и даже посещение дикой Сибири зимой - это один из многих маршрутов, которые ждут нас на пути протяженностью не менее 30 тысяч километров.";
  //Fourth Card
  changeBodys[3].textContent = "Английские внедорожники, на которых Rusamericana путешествовала по Панаме и Коста-Рике.";
  changeSubBodys[3].textContent = "Когда откроются границы, мы будем посещать страны, входящие в Евросоюз.Работать с нами. Через социальные сети мы сотрудничаем с различными брендами, региональными и международными. Если вам интересно принять участие в наших приключениях, оставьте свои контактные данные, и мы свяжемся с вами.";
}

function changeToEnglish(element: Element[]) {
  changeBtn.innerText = "SPANISH";
  changeTitle.innerText = "WHO WE ARE";
  changeTitles[0].textContent = "WHO WE ARE";
  changeTitles[1].textContent = "A young marriage of a Russian with a Venezuelan, lovers of nature, outdoor activities and social networks. We are traveling thousands and thousands of kilometers around the world and we want to show that anyone, with the right tools, can fulfill any dream.";
  changeTitles[2].textContent = "Maria Vitalievna Boyko-Solano";
  changeTitles[3].textContent = "Ricardo Solano";
  changeTitles[4].textContent = "UAZ Patriot";
  changeTitles[5].textContent = "Land Rover Discovery TD5 y 300td";
  //First Card
  changeBodys[0].textContent = "Bilingual, Graduate in International Studies, Specialist in Digital Marketing, student (online) of Master in Marketing.";
  changeSubBodys[0].textContent = "Born in the Russian Far East (Asian Continent, Javarosk city) at the age of 4 her family moved to the European part of Russia, to the Krasnodar region. Learn the Spanish language in record time at Kuban State University. In her youth she was a professional dancer of Russian folk dance. In her adulthood she met Ricardo and got married. To date it has been in three continents (Asia, Europe and America) and in sixteen countries.";
  //Second Card
  changeBodys[1].textContent = "Master in Business Administration, photography enthusiast";
  changeSubBodys[1].textContent = "Born in South America, in Caracas, Venezuela, raised in a family where trips and outdoor recreational activities were very important. Since he was young, he practiced different sports such as cycling, surfing, baseball among others. In 2015 after visiting several countries, he decided to move to Russia to study a master's degree where he met María. To date he has been to four continents (America, Africa, Asia and Europe)and in twenty one countries.";
  //Third Card
  changeBodys[2].textContent = "Russian off-road vehicle, rigid double axle, model widely sold in Russia, currently in use";
  changeSubBodys[2].textContent = "Our next route (without clicking anywhere). By fall 2021, we will set out to tour the world's largest country, Russia, from east to west. Visiting its main cities and tourist attractions. Beaches in the Black and Caspian Sea, infinite savannahs, frozen lakes and even visiting the wild Siberia in winter, is one of the many routes that await us, on a journey of no less than 30 thousand kilometers. When free borders are opened, we will be visiting the countries belonging to the European Union.  ";
  //Fourth Card
  changeBodys[3].textContent = "English SUVs, used by Rusamericana in adventures in Panama and Costa Rica.";
  changeSubBodys[3].textContent = "Work with us. Through social networks, we have collaborated with different brands, regional and international, if you find it interesting to be part of our adventures, please leave your contact information and we will contact you.";
}

function changeToSpanish(element: Element[]) {
  changeBtn.innerText = "РУССКИЙ";
  changeTitle.innerText = "RUSAMERICANA";
  changeTitles[0].textContent = "QUIENES SOMOS";
  changeTitles[1].textContent = "Un joven matrimonio de una rusa con un venezolano, amantes de la naturaleza, actividades al aire libre y las redes sociales. Estamos recorriendo miles y miles de kilómetros alrededor del mundo, deseamos demostrar que cualquier persona, con las herramientas adecuadas, puede cumplir cualquier sueño.";
  changeTitles[2].textContent = "Maria Vitalievna Boyko-Solano";
  changeTitles[3].textContent = "Ricardo Solano";
  changeTitles[4].textContent = "UAZ Patriot";
  changeTitles[5].textContent = "Land Rover Discovery TD5 y 300td";
  //First Card
  changeBodys[0].textContent = "Bilingüe, Licenciada en Estudios Internacionales, Especialista en Marketing Digital, estudiante (online) de Maestría en Marketing.";
  changeSubBodys[0].textContent = "Nacida en el Lejano Oriente Ruso (Continente Asiático, ciudad Javarosk) a los 4 años su familia se muda a parte europea de Rusia, a la región de Krasnodar. Aprende el idioma español en tiempo récord en la universidad estadal de Kuban. En su juventud fue bailarina profesional de danza folclórica rusa. En su etapa adulta conoce a Ricardo, se casa. Comienza la aventura que la ha llevado a la fecha a estar en tres continentes diferentes (Asia, Europa y America) conocer diecies paises probando diferentes culturas en todo este tiempo.";
  //Second Card
  changeBodys[1].textContent = "Licenciado en Contaduría, Master en Administración de Negocios, aficionado a la fotografía.";
  changeSubBodys[1].textContent = "Nacido en Latinoamérica, en la ciudad de Caracas, Venezuela, criado en una familia donde los viajes y las actividades recreativas al aire libre eran y son muy importantes, desde joven practico a nivel aficionado diferentes deportes como ciclismo, surf, béisbol entre otros. Contador Público de la Universidad Católica Andrés Bello, en el 2015 luego de visitar varios países en calidad de turista, decide mudarse a Rusia para estudiar una maestría donde conoce a María. A la fecha ha estado en cuatro continentes (América, África, Asia y Europa) en ventiun países.";
  //Third Card
  changeBodys[2].textContent = "Vehículo todoterreno ruso, de doble eje rígido, modelo ampliamente vendido en Rusia, actualmente en uso.";
  changeSubBodys[2].textContent = "Nuestra próxima ruta. Para el otoño 2021, saldremos a recorrer el país más grande del mundo, Rusia, de este a oeste. Visitando sus principales ciudades y atractivos turísticos. Playas en el mar negro y caspio, infinitas sabanas, lagos congelados e inclusive visitar en invierno la salvaje Siberia, es una de las múltiples rutas que nos esperan, en un viaje de no menos de 30 mil kilómetros.";
  //Fourth Card
  changeBodys[3].textContent = "Todoterrenos ingleses, usados por Rusamericana en aventuras por Panamá y Costa Rica.";
  changeSubBodys[3].textContent = "Cuando se tengan aperturas de fronteras libres, estaremos visitando los países pertenecientes a la unión europea. Trabaja con nosotros. A través de las redes sociales, hemos colaborado con diferentes marcas, regionales e internacionales, si te parece interesante ser parte de nuestras aventuras, por favor deja tus datos de contacto y te contactaremos.";
}