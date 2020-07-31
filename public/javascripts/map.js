//coordenadas
var map = L.map('main_map').setView([3.4540179, -76.5611628], 13);

//coordenadas pintadas en el mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

$.ajax({
    dateType: "json",
    url: "api/bicicletas",
    success: function (result) {
        console.log(result);
        result.bicicletas.forEach(function(bici) {
            L.marker(bici.ubicacion, {title: bici.id}).addTo(map);
        });
    }
})