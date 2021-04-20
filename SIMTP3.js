function getRNG() {
    return Math.random();
}

function generarUniforme(limiteInferior, limiteSuperior, n) {
    var r = [];

    for (var i = 0; i < n; i++) {
        var random = limiteInferior + (limiteSuperior - limiteInferior) * getRNG();
        r.push(random);
    }

    return r;
}

function generarNormalBoxMuller(media, estDesv, n) {
    var r = [];

    for (var i = 0; i < n; i += 2) {
        var randomA = getRNG();
        var randomB = getRNG();

        var v = Math.sqrt(-2 * Math.log(randomA)) * Math.cos(2 * Math.PI * randomB);
        v *= estDesv;
        v += media;

        r.push(v);

        v = Math.sqrt(-2 * Math.log(randomA)) * Math.sin(2 * Math.PI * randomB);
        v *= estDesv;
        v += media;

        r.push(v);
    }

    return r;
}

function generarNormalConvolucion(media, estDesv, n) {
    var r = [];

    for (var i = 0; i < n; i++) {
        var randoms = [];
        var s = 0;

        for (var j = 0; j < 12; j++) {
            randoms.push(getRNG());
            s += randoms[j];
        }

        s -= 6;
        var re = media + (s * estDesv);

        r.push(re);
    }

    return r;
}

function generarPoisson(lambda, n) {
    var r = [];

    for (var i = 0; i < n; i++) {
        var p = 1;
        var x = -1;
        var a = Math.exp(-lambda);

        do {
            var u = getRNG();
            p = p * u;
            x++;
        } while (p >= a);

        r.push(x);
    }

    return r;
}

function generarExponencialMedia(media, n) {
    var r = [];

    for (var i = 0; i < n; i++) {
        var random = getRNG();

        var x = -media;
        x *= Math.log(1 - random);

        r.push(x);
    }

    return r;
}

function generarExponencialLambda(lambda, n) {
    return generarExponencialMedia(1 / lambda, n);
}

export { generarUniforme, generarNormalBoxMuller, generarNormalConvolucion, generarPoisson, generarExponencialMedia, generarExponencialLambda }
