function recupValeur(id) {
    var valeur = parseInt(window.document.querySelector(id).value);
    if (isNaN(valeur)) {
        window.document.querySelector(id).value = 0;
        return 0;
    } else {
        return valeur;
    }
}

function calc_vol_cube()
{
    
    let x1 = recupValeur('#x1');
    var rez = x1*x1*x1;
    var res = decimal(rez);
    window.document.querySelector("#calcube").innerHTML =
                     "Le volume de votre cube est de " + res + " cm3";
}



function calc_vol_sphere()
{
    
    let x1 = recupValeur('#s1');
    var rez = (4*Math.PI*x1*x1*x1)/3;
    var res = decimal(rez);
    window.document.querySelector("#cal4").innerHTML =
                     "Le volume de votre sphère est de " + res + " cm3";
}

function calc_vol_cylindre()
{     
    let x1 = recupValeur('#p1');
    let x2 = recupValeur('#p2');
    var rez =Math.PI*x1*x1*x2;
    var res = decimal(rez);
    window.document.querySelector("#cal3").innerHTML =
                     "Le volume de votre cylindre est de " + res + " cm3";

}

function calc_vol_pave()
{
    
    let x1 = recupValeur('#pa1');
    let x2 = recupValeur('#pa2');
    let x3 = recupValeur('#pa3');
    var rez =x1*x2*x3;
    var res = decimal(rez);
    window.document.querySelector("#cal5").innerHTML =
                     "Le volume de votre pavé est de " + res + " cm3";
}

function calc_vol_cone()
{   
    let x1 = recupValeur('#c1');
    let x2 = recupValeur('#c2');    
    var rez =(Math.PI*x1*x1*x2)/3;
    var res = decimal(rez);
    window.document.querySelector("#cal6").innerHTML =
                     "Le volume de votre cône est de " + res + " cm3";
}


function calc_vol_pyramide()
{
    
    let x1 = recupValeur('#y1');
    let x2 = recupValeur('#y2');
    var rez =(x1*x1*x2)/3;
    var res = decimal(rez);
    window.document.querySelector("#calpy").innerHTML =
                     "Le volume de votre pyramide est de " + res + " cm3";
}
function decimal(x) {
    return Number.parseFloat(x).toFixed(2);
  }