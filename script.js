fetch('https://jsonplaceholder.typicode.com/todos/format=json')
.then(result => result.json())
.then((res) => {
    createList(res);
})
.catch(err => console.log(err))


function createList(result) {
    var details = document.getElementById("todoList");
    details.innerHTML += "<span>UserId: " + result.userId + "</span>";
    details.innerHTML += "<span>Id: " + result.id + "</span>";
    details.innerHTML += "<span>Title: " + result.title + "</span>";
    details.innerHTML += "<span>Completed: " + result.completed + "</span>";
}