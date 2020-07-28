var Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function () {
    return 'id: ' + this.id + " | color: " + this.color;
}

Bicicleta.allBicis = [];
Bicicleta.add = function (aBici) {
    Bicicleta.allBicis.push(aBici);
}

Bicicleta.findByid = function(ABiciId) {
    var aBici = Bicicleta.allBicis.find(x => x.id == ABiciId);
    if (aBici)
        return aBici;
    else
        throw new Error (`No exite una bicicleta con ese id ${ABiciId}`);
}

Bicicleta.removeById = function(ABiciId) {
    for (let i = 0; i< Bicicleta.allBicis.length; i++) {
      if (Bicicleta.allBicis[i].id == ABiciId) {
          Bicicleta.allBicis.splice(i, 1);
          break;
      }
       
    }
}

var a = new Bicicleta (1, 'rojo', 'urbano', [3.4926202,-76.5141374]);
var b = new Bicicleta (2, 'verde', 'montana', [3.4733868, -76.5072281]);

Bicicleta.add(a);
Bicicleta.add(b);


module.exports = Bicicleta;