var Bicicleta = require('../../models/bicicleta');

exports.bicicleta_list = function (req, res) {
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    });
}

exports.bicicleta_create = function (req, res) {
    var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion = [req.body.lat, req.body.lng];

    Bicicleta.add(bici);

    res.status(200).json({
        bicicleta : bici
    });
}

exports.bicicleta_delete = function (req, res) {
    Bicicleta.removeById(req.body.id);
    res.status(204).send();
}



exports.bicicleta_update_post = function (req, res) {
    var aBiciId = Bicicleta.findByid(req.body.id);
    for (var i = 0; i < Bicicleta.allBicis.length; i++) {
        if (Bicicleta.allBicis[i].id == aBiciId.id) {
            aBiciId.color = req.body.color;
            aBiciId.modelo = req.body.modelo;
            aBiciId.ubicacion = [req.body.lat, req.body.lng];
            break;
        }
    }
    res.status(200).json({
        bicicleta: Bicicleta.allBicis,
    });
};

