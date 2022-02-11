//creo un array con le immagini da inserire nell'HTML
const imgCarousel = [
    'img/img-1.jpg',
    'img/img-2.jpg',
    'img/img-3.jpg',
    'img/img-4.jpg',
    'img/img-5.jpg',
    'img/img-6.jpg'
];

//creo un array con i titoli delle immagini da inserire nell'HTML
const imgPlaces = [
    'Capo Milazzo',
    'Laghetti di Marinello',
    'Santa Tecla',
    'Forza D\'Agrò',
    'Capo Alì',
    'Vulcano Etna'
]

const item = document.getElementsByClassName('item');
console.log(item);

for(let i = 0; i < imgCarousel.length; i++){
    console.log(imgCarousel[i], imgPlaces[i]);

    const img = document.createElement('img');
    item.append(img);
}