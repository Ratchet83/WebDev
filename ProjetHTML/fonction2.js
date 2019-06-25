function calc_perimetre_triangle()
{
let x1 = recupValeur(..);
let x2 = recupValeur(..);
let x3 = recupValeur(..);
var rez=x1+x2+x3;
window.document.querySelector(...).innerHTML =
                "Le périmètre du triangle est de " + rez + " cm²";

}

function calc_aire_triangle()
{ 
    let x1 = recupValeur(..);
    let x2 = recupValeur(..);
    let x3 = recupValeur(..);
    var c = (x1+x2+x3)/2;
    var rez = Math.sqrt(c*(c-x1)*(c-x2)*(c-x3));
    window.document.querySelector(...).innerHTML =
                    "L'aire du triangle périmètre du triangle est de " + rez + " cm²";
}

function calc_perim_rect()
{    
    let x1 = recupValeur(..);
    let x2 = recupValeur(..);
    var rez = (x1+x2)*2;
    window.document.querySelector(...).innerHTML =
                    "Le périmètre du rectangle est de " + rez + " cm²";

}

function calc_aire_rect()
{
    let x1 = recupValeur(..);
    let x2 = recupValeur(..);
    var rez = x1*x2;
    window.document.querySelector(...).innerHTML =
                    "L'aire du rectangle est de " + rez + " cm²";
}

function calc_perim_cercle()
{
    let x1 = recupValeur(..);
    var rez=Math.PI*2*x1;
    window.document.querySelector(...).innerHTML =
                    "Le périmètre du cercle est de " + rez + " cm²";
}

function calc_aire_cercle()
{
    let x1 = recupValeur(..);
    var rez = Math.PI*x1*x1;
    window.document.querySelector(...).innerHTML =
                    "L'aire du cercle est de " + rez + " cm²";
}


function calc_perim_losange()
{
    let x1 = recupValeur(..);
    var rez = 4*x1;
    window.document.querySelector(...).innerHTML =
                    "Le périmètre du losange est de " + rez + " cm²";
}

function calc_aire_losange()
{
    let x1 = recupValeur(..);
    let x2 = recupValeur(..);
    var rez = (x1*x2)/2;
    window.document.querySelector(...).innerHTML =
                    "L'aire du losange est de " + rez + " cm²";
}

function calc_perim_triangle_rect()
{
    let x1 = recupValeur(..);
    let x2 = recupValeur(..);
    var rez = Math.sqrt(x1*x1+x2*x2) + x1 + x2;
    window.document.querySelector(...).innerHTML =
                    "Le périmètre du triangle rectangle est de " + rez + " cm²";
}

function calc_aire_triangle_rectangle()
{
    let x1 = recupValeur(..);
    let x2 = recupValeur(..);
    var rez = (x1*x2)/2;
    window.document.querySelector(...).innerHTML =
                    "L'aire du triangle rectangle est de " + rez + " cm²";
}