async function getData() {
    try {
        const response = await fetch("https://api.openligadb.de/getbltable/bl1/2023");
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new TypeError("Sorry, there's no JSON");
        }
        const data = await response.json();
        let html = "";
        data.forEach((element, index) => {
            index += 1;
            html += "<div class='zeile'>" + "<div class='mannschaft'>" + "<div id='platzierung'>" + index + "</div>" + "<img class='logo' src=" + element.teamIconUrl + ">" + "<div id='name'>" + element.teamName + "</div>" + "</div>" + "<div class='infos'>" + "<div class='info' id='spiele'>" + element.matches + "</div>" + "<div class='info' id='siege'>" + element.won + "</div>" + "<div class='info' id='unentschieden'>" + element.draw + "</div>" + "<div class='info' id='niederlagen'>" + element.lost + "</div>" + "<div class='info' id='tore'>" + element.goals + "</div>" + "<div class='info' id='differenz'>" + element.goalDiff + "</div>" + "<div class='info' id='punkte'>" + element.points + "</div>" + "</div>" + "</div>";
        });
        document.getElementById("content").innerHTML = html;
        // process your data further
    } catch (error) {
        console.error("Error:", error);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    getData();
})
