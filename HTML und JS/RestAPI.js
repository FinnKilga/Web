document.getElementById("load").addEventListener("click", function () {

    fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
       result.json().then((data)=>{
        getHtmlForTodos(data);
       })
    })
})

function getHtmlForTodos(data){
    let html = "<ul>";
    data.forEach(todo => {
        html += "<li>" + todo.title + "</li>";
    });
    html += "</ul>";
    document.getElementById("content").innerHTML = html;
}