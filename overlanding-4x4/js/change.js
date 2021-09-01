//Variables
var botonDeCambio = document.querySelector("#idioma");
var idioma = false;
var cambiarTitulo = document.querySelector("#titulo");
var cambiarBotonContacto = document.querySelector("#contacto");
let cambiarTituloTarjeta = [document.querySelector("#tituloTarjeta1"),document.querySelector("#tituloTarjeta2"),document.querySelector("#tituloTarjeta3")];  
let cambiarCuerpoTarjeta = [document.querySelector("#cuerpoTarjeta1"),document.querySelector("#cuerpoTarjeta2"),document.querySelector("#cuerpoTarjeta3")];

//Funcion de cambio
botonDeCambio.addEventListener("click",function()
{
    if(idioma == false)
    {
        /* Titulos */
        cambiarTitulo.innerText = "СКОРО НА RUSAMERICANA";
        botonDeCambio.innerText = "ESPAÑOL";
        // cambiarBotonContacto.innerText = "Контакты";
        // cambiarBotonContacto.href = "https://docs.google.com/forms/d/e/1FAIpQLSe-Cmh9VLRtufzilTszxxtQRE7D-h8emhCw7Mmbvjcd9J4LLA/viewform";
        // cambiarTituloTarjeta[0].innerText = "Путешествия 4х4";
        // cambiarTituloTarjeta[1].innerText = "Наставничество в Instagram";
        // cambiarTituloTarjeta[2].innerText = "Instagram с целью";
        // /* Tarjetas */
        // cambiarCuerpoTarjeta[0].innerText = "На борту одного из наших полноприводных автомобилей, подготовленных для приключений, я путешествовала по пляжам Карибского моря, тропическим джунглям, вулканическим районам в Центральной Америке, а также в Европе, проехала с юга России до Северного полярного круга, увидела воды Северного Ледовитого океана. Предстоящие приключения приведут меня в Европу и Азию";
        // cambiarCuerpoTarjeta[1].innerText = "Мне удалось позиционировать свой аккаунт чуть более чем за год, набрав от 0 до 200 тысяч подписчиков за короткое время. Обладая полученными знаниями, я посвящаю себя тому, чтобы помогать аккаунтам в Инстаграм, которые хотят достичь своих целей через Instagram. Напишите мне на  почту, если хотите, чтобы мы провели индивидуальные занятия.";
        // cambiarCuerpoTarjeta[2].innerText = "программа, разработанная, чтобы помочь ученикам оптимизировать свое присутствие в Instagram. На сегодняшний день программа насчитывает более сотни участников, и она стала символом того, как Rusamericana выходит за рамки границ и преподает через живые классы в Zoom, проверенной методологии для улучшения вашего Instagram.";
        idioma = true;
    }else if(idioma == true)
    {
        cambiarTitulo.innerText = "PROXIMAMENTE EN RUSAMERICANA";
        botonDeCambio.innerText = "РУССКИЙ";
        cambiarBotonContacto.innerText = "Contacto";
        // cambiarBotonContacto.href = "https://docs.google.com/forms/d/e/1FAIpQLSfivTlHlHbFd7NCrBv7U7OZE9J9FiNXCUhvvcSNpLydH-YsRg/viewform";
        // cambiarTituloTarjeta[0].innerText = "Viajes overlanding 4x4";
        // cambiarTituloTarjeta[1].innerText = "Mentoria personalizada Instagram";
        // cambiarTituloTarjeta[2].innerText = "Programa grupal instagram con proposito";
        // /* Tarjetas */
        // cambiarCuerpoTarjeta[0].innerText = "A bordo de alguno de nuestros vehículos 4x4 preparados para la aventura, he recorrido playas caribeñas, selvas tropicales, zonas volcánicas en Centro América, también en Europa, recorri desde el Sur de Rusia hasta el Circulo Polar Artico conociendo las aguas del Océano Artico. Próximas aventuras me llevaran a Europa y Asia";
        // cambiarCuerpoTarjeta[1].innerText = "He logrado posicionar mi cuenta como influenciador en un poco mas de un año, pasando de 0 a 200 mil seguidores en corto tiempo. Con los conocimientos ganados, me dedico a ayudar a cuentas one to one que desean cumplir sus objetivos a través de Instagram. Escribeme un email si gustas tener sesiones de mentoria personalizadas";
        // cambiarCuerpoTarjeta[2].innerText = "Programa que estoy desarrollado para ayudar a los participantes a optimizar su presencia en Instagram. Con más de cien participantes a la fecha, el programa se ha vuelto un icono de como Rusamericana trasciende las fronteras y enseña a través de clases en vivo por Zoom, metodología probada para potenciar tu instagram.";
        idioma = false;
    }
    
});

//с целью: программа, разработанная, чтобы помочь ученикам оптимизировать свое присутствие в Instagram. На сегодняшний день программа насчитывает более сотни участников, и она стала символом того, как Rusamericana выходит за рамки границ и преподает через живые классы в Zoom, проверенной методологии для улучшения вашего Instagram.