function recupValeur(id) {
    var valeur = parseInt(window.document.querySelector(id).value);
    if (isNaN(valeur)) {
        window.document.querySelector(id).value = 0;
        return 0;
    } else {
        return valeur;
    }
}


function calc_perimetre_triangle()
{
let x1 = recupValeur('#tp1');
let x2 = recupValeur('#tp2');
let x3 = recupValeur('#tp3');
var rez=x1+x2+x3;
window.document.querySelector("#tp").innerHTML =
                "Le périmètre du triangle est de " + rez + " cm";

}



function calc_aire_triangle()
{ 
    let x1 = recupValeur('#ta1');
    let x2 = recupValeur('#ta2');
    let x3 = recupValeur('#ta3');
    var c = (x1+x2+x3)/2;
    var rez = Math.sqrt(c*(c-x1)*(c-x2)*(c-x3));
    window.document.querySelector("#ta").innerHTML =
                    "L'aire du triangle périmètre du triangle est de " + rez + " cm²";
}

function calc_perim_rect()
{    
    let x1 = recupValeur('#rp1');
    let x2 = recupValeur('#rp2');
    var rez = (x1+x2)*2;
    window.document.querySelector("#rp").innerHTML =
                    "Le périmètre du rectangle est de " + rez + " cm²";

}

function calc_aire_rect()
{
    let x1 = recupValeur('#ra1');
    let x2 = recupValeur('#ra2');
    var rez = x1*x2;
    window.document.querySelector("#ra").innerHTML =
                    "L'aire du rectangle est de " + rez + " cm²";
}

function calc_perim_cercle()
{
    let x1 = recupValeur('#cp1');
    var rez=Math.PI*2*x1;
    window.document.querySelector("#cp").innerHTML =
                    "Le périmètre du cercle est de " + rez + " cm²";
}

function calc_aire_cercle()
{
    let x1 = recupValeur('#ca1');
    var rez = Math.PI*x1*x1;
    window.document.querySelector("#ca").innerHTML =
                    "L'aire du cercle est de " + rez + " cm²";
}


function calc_perim_losange()
{
    let x1 = recupValeur('#lp1');
    var rez = 4*x1;
    window.document.querySelector("#lp").innerHTML =
                    "Le périmètre du losange est de " + rez + " cm²";
}

function calc_aire_losange()
{
    let x1 = recupValeur('#la1');
    let x2 = recupValeur('#la2');
    var rez = (x1*x2);
    window.document.querySelector("#la").innerHTML =
                    "L'aire du losange est de " + rez + " cm²";
}

function calc_perim_triangle_rect()
{
    let x1 = recupValeur('#trp1');
    let x2 = recupValeur('#trp2');
    var rez = Math.sqrt(x1*x1+x2*x2) + x1 + x2;
    window.document.querySelector("#trp").innerHTML =
                    "Le périmètre du triangle rectangle est de " + rez + " cm²";
}

function calc_aire_triangle_rectangle()
{
    let x1 = recupValeur('#tra1');
    let x2 = recupValeur('#tra2');
    var rez = (x1*x2)/2;
    window.document.querySelector("#tra").innerHTML =
                    "L'aire du triangle rectangle est de " + rez + " cm²";
}