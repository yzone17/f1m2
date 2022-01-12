const myImage = document.getElementById('myImage')
const myTitle = document.getElementById('myTitle')

let paintings = [
    "img/Yonia/Drawing0.jpg",
    "img/Yonia/Drawing1.png",
    "img/Yonia/Drawing2.png",
    "img/Yonia/Drawing3.png",
    "img/Yonia/Drawing4.jpg",
    "img/Yonia/Drawing5.jpg"
];

let titles = [
    "Cellia",
    "Orianna",
    "Leona",
    "Radelia",
    "Leona sleeping",
    "Radelia sketch"

];



function changeImage(index){
    myTitle.innerHTML = titles[index]
    myImage.src = paintings[index]
}
