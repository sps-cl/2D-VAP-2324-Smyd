function vytvoritTabulku() {
    var pocetRadku = document.getElementById("pocet-radku").value;
    var pocetSloupcu = document.getElementById("pocet-sloupcu").value;
    var tabulka = "<table border='1'>";

    for (var i = 0; i < pocetRadku; i++) {
        tabulka += "<tr>";
        for (var j = 0; j < pocetSloupcu; j++) {
                        tabulka += "<td>" + (i * pocetSloupcu + j + 1) + "</td>";
        }
    tabulka += "</tr>";
    }

tabulka += "</table>";
document.body.insertAdjacentHTML("beforeend", tabulka);
}

