'use strict'

let day = 0;
let price = 0;

let type_site = parseInt(prompt(" Выберите тип сайта: \n1 - Сайт-визитка \n2 - Landing \n3 - Корпоративный"));
if (type_site === 1) {
    day += 1;
    price += 1000;
}
else if (type_site === 2) {
    day += 2;
    price += 2000;
}

else {
    day += 3;
    price += 3000;
}

let design = parseInt(prompt(" Выберите тип дизайна: \n1 - Шаблон \n2 - Макет \n3 - Разработка"));
if (design === 1) {
    day += 1;
    price += 1000;
}
else if (design === 2) {
    day += 2;
    price += 2000;
}

else {
    day += 3;
    price += 3000;
}

let adaptability = parseInt(prompt(" Выберите адаптивность сайта: \n1 - Адаптивный \n2 - Отзывчивый \n3 - Pixel Perfect"));
if (adaptability === 1) {
    day += 1;
    price += 1000;
}
else if (adaptability === 2) {
    day += 2;
    price += 2000;
}

else {
    day += 3;
    price += 3000;
}

alert("Заказ принят! \nКоличество дней: " + day + "\nСтоимость: " + price);