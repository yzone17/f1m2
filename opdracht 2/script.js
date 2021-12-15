console.log("Script if geladen!")

const Cornavos = document.getElementById("Cornavos");
const Ylroi = document.getElementById("Ylroi");

function ZetInYlroi(Ylroilians){
    console.log(Ylroilians);

    const nieuwElement = document.createElement('h2');
    nieuwElement. innerHTML = Ylroilians;
    nieuwElement.className = 'green';
    Ylroi.appendChild(nieuwElement);


}
function ZetInCornavos(Cornavonian){
    console.log(Cornavonian);

    const nieuwElement = document.createElement('h2');
    nieuwElement. innerHTML = Cornavonian;
    Cornavos.appendChild(nieuwElement);
    nieuwElement.className = 'rood';
}