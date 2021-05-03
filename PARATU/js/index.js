var load = document.getElementById("loading");

window.onload = lun;

function lun() {
    load.style.display = "none";
}

var dialog = document.getElementsByClassName("dialog")[0];
var variableBorder = 1;
var changeBorder = setInterval(change, 300);

function change() {
    if (variableBorder == 1) {
        dialog.style.border = "none";
        variableBorder = 2;
    } else if (variableBorder == 2) {
        dialog.style.borderRight = "20px solid white";
        variableBorder = 1;
    }
}

var dialogs = {
     value0: function() {
        texts = "Hola mi amor!!! ...  (ponle play a la musica xd)";
        timer = 400;
    },
     value1: function() {
        texts = "mi vida u.u hoy es un dia muy muy muuuy especial!";
        timer = 400;
    },
     value2: function() {
        texts = "Han pasado ya dos años!! awww...";
        timer = 400;
    },
     value3: function() {
        texts = "mi niña hermosa no sabes lo feliz que me haces!";
        timer = 400;
    },
     value4: function() {
        texts = "Es increible pensar que hace dos años aceptaste ser mi novia ";
        timer = 400;
    },
     value5: function() {
        texts = "y comenzo esta linda historia de amor";
        timer = 400;
    },
     value6: function() {
        texts = "mi Reina bonitaaaaa";
        timer = 400;
    },
     value7: function() {
        texts = "Junto a ti vivo los momentos mas felices de mi vida";
        timer = 400;
    },
     value8: function() {
        texts = "y todo se lo debo a esa magia que tiene el amor que me entregas";
        timer = 400;
    },
     value9: function() {
        texts = "Nunca pensé que podría haber una persona tan especial como tu";
        timer = 400;
    },
     value10: function() {
        texts = "te AMOOO MUCHISISISISISIIIIIIISIMOOO!!!";
        timer = 150;
    },
     value11: function() {
        texts = "De un campo de flores,";
        timer = 150;
    },
    value12: function() {
        texts = "escojo a la flor más bella que cuidare por el resto de mi vida";
        timer = 150;
    },
    value13: function() {
        texts = " a ti.";
        timer = 150;
    },
    value14: function() {
        texts = "No tengas miedo yo estoy contigo y siempre estaré aquí";
        timer = 200;
    },
    value15: function() {
        texts = "sigamos adelante juntos";
        timer = 400;
    },
    value16: function() {
        texts = "Lo mas bonito de cada día, son tus besos y sonrisas.";
        timer = 400;
    },
    value17: function() {
        texts = "FELIZ ANIVERSARIO MI AMOR";
        timer = 400;
    },
    value18: function() {
        texts = "TE AMOOO";
        timer = 400;
    }
};

var namber = 0;
var timer;
var texts;

type();

function type() {
    dialogs["value" + namber]();

    dialog.innerHTML = "";
    var Letters = [];

    for (var i = 0; i < texts.length; i++) {
        text = texts.charAt(i);
        Letters[i] = text;
    }

    writes = setInterval(write, timer);

    positionLetter = 0;

    function write() {
        if (positionLetter == Letters.length) {
            clearInterval(writes);
            namber++;
            if (namber == Object.keys(dialogs).length) {
                clearInterval(writes);
                return up();
            }
            setTimeout(type, 1000);
            return;
        }
        dialog.innerHTML += Letters[positionLetter];
        positionLetter++;
    }
}

var a = 1;
var b = 1;

function up() {
    sus = setInterval(startus, 10);

    function startus() {
        a += 0.00001;
        b += 0.00001;
        dialog.style.transform = "scale(" + a++ + "," + b++ + ")";
    }
}