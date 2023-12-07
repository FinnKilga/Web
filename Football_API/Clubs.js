async function getData() {
    try {
        const response = await fetch("https://api.openligadb.de/getavailableteams/bl1/2023");
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new TypeError("Sorry, there's no JSON");
        }
        const data = await response.json();
        let html = "";
        data.forEach((element) => {
            html += "<div class='content'>" + "<div class='club'>" + "<div class='logo'><img class='logo' src=" + element.teamIconUrl + "></div>" + "<div class='name'>"+ element.teamName +"</div></div></div>";
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