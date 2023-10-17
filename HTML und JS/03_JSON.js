let data = [
    { firstName: "Hans", lastName: "Huber", points: 30 },
    { firstName: "Paul", lastName: "Müller", points: 30 },
    { firstName: "Franz", lastName: "Maier", points: 30 },
];

function loadPeople() {
    let html = " ";
    data.forEach(element => {
        html += "<div>" + element.firstName + " " + element.lastName + "</div>"
    });
    document.getElementById("content").innerHTML = html;
}

loadPeople();