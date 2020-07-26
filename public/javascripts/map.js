//coordenadas
var mymap = L.map('main_map').setView([3.4540179, -76.5611628], 13);

//coordenadas pintadas en el mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(mymap);