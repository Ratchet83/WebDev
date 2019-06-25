function calc_perimetre_triangle(x1,x2,x3)
{
var a;
a=x1+x2+x3;
return a;
}

function calc_aire_triangle(x1,x2,x3)
{
    var b;
    var c;
    var d;
    b=x1+x2+x3;
    c=b/2;
    d=Math.sqrt(c*(c-x1)*(c-x2)*(c-x3));
    return d;
}

function calc_perim_rect(x1,x2)
{
    var e;
    e=(x1+x2)*2;
    return e;
}

function calc_aire_rect(x1,x2)
{
    var f;
    f=x1*x2;
    return f;
}

function calc_perim_cercle(x1)
{
    var g;
    g=Math.PI*2*x1;
    return g;
}

function calc_aire_cercle(x1)
{
    var h;
    h=Math.PI*x1*x1;
    return h;
}

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
    var rez = [];
    var x1 = [];
    let x1 = recupValeur('#x1');
    var rez = x1*x1*x1;
    window.document.querySelector("#calcube").innerHTML =
                     "L'air de vote cube est de " + rez + " cm²";
}





function calc_vol_sphere(x1)
{
    var j;
    j=(4*Math.PI*x1*x1*x1)/3;
    return j;
}

 function calc_vol_cylindre(x1,x2)
{
    var k;
    k=Math.PI*x1*x1*x2;
    return k;
}

function calc_vol_pave(x1,x2,x3)
{
    var l;
    l=x1*x2*x3;
    return l;
}

function calc_vol_cone(x1,x2)
{
    var m;
    m=(Math.PI*x1*x1*x2)/3;
    return m;
}

function calc_vol_pyramide(x1,x2)
{
    var n;
    n=(x1*x1*x2)/3;
    return n;
}

function calc_perim_losange(x1)
{
    var o;
    o=4*x1;
    return o;
}

function calc_aire_losange(x1,x2)
{
    var p;
    p=(x1*x2)/2;
    return p;
}

function calc_perim_triangle_rect(x1,x2)
{
    var q;
    let a;
    a=Math.sqrt(x1*x1+x2*x2);
    q=a+x1+x2;
    return q;
}

function calc_aire_triangle_rectangle(x1,x2)
{
    var r;
    r=(x1*x2)/2;
    return r;
}