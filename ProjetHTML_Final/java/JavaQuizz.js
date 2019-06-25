window.addEventListener("load", function () {

    window.document.querySelector("#check").addEventListener("click", function () {
        let i = 0;
        let fauxtab = window.document.querySelectorAll(".faux");
        let vraitab = window.document.querySelectorAll(".vrai");
        
        if (window.document.querySelector("input[name=Q1]:checked").value==="C") {
            i++;
        }
        if (window.document.querySelector("input[name=Q2]:checked").value==="A") {
            i++;
        }
        if (window.document.querySelector("input[name=Q3]:checked").value==="C") {
            i++;
        }
        if (window.document.querySelector("input[name=Q4]:checked").value==="B") {
            i++;
        }
        
        for (j = 0; j < fauxtab.length; j++) {

        fauxtab[j].innerHTML="  X";
    }
    
    for (p = 0; p < vraitab.length; p++) {

        vraitab[p].innerHTML="  ✓";
    }

        window.document.querySelector("#resultats").innerHTML = "Vous avez " + i + " sur 4 ";
    });
    
    window.document.querySelector("#retake").addEventListener("click", function () {
        let i = 0;
        let fauxtab = window.document.querySelectorAll(".faux");
        let vraitab = window.document.querySelectorAll(".vrai");
        
        for (j = 0; j < fauxtab.length; j++) {

        fauxtab[j].innerHTML="";
    }
    
    for (p = 0; p < vraitab.length; p++) {

        vraitab[p].innerHTML="";
    }
    window.document.querySelector("#resultats").innerHTML = "";
    });
});


function recupValeur(id) {
    var valeur = parseInt(window.document.querySelector(id).value);
    if (isNaN(valeur)) {
        window.document.querySelector(id).value = 0;
        return 0;
    } else {
        return valeur;
    }
}