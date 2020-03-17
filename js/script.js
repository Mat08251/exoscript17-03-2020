function validerform() {
    var champ = document.getElementById("myField").value;
    if (!champ) {
        document.getElementById("erreurlabel").innerHTML = "Vide";
    } else {
        document.getElementById("erreurlabel").innerHTML = "Pas vide";
    }
    return false;
}