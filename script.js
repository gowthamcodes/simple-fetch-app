function getText() {
  fetch("file.txt")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("output").innerHTML = data;
    });
}

function getUsers() {
  fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
      let output = `<h1 class="mb-4">Users</h2>`;
      data.forEach((user) => {
        output += `<ul class="list-group mb-3">
                <li class="list-group-item">${user.id}</li>
                <li class="list-group-item">${user.name}</li>
                <li class="list-group-item">${user.email}</li>
              </ul>`;

        document.getElementById("output").innerHTML = output;
      });
    });
}

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let output = `<h1 class="mb-4">Posts</h2>`;
      data.forEach((post) => {
        output += `<div class="card card-body mb-3">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>`;
        document.getElementById("output").innerHTML = output;
      });
    });
}

function addPost(event) {
  event.preventDefault();

  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

const button = document.getElementById("getText");
button.addEventListener("click", getText);

const userButton = document.getElementById("getUsers");
userButton.addEventListener("click", getUsers);

const ApiButton = document.getElementById("getPosts");
ApiButton.addEventListener("click", getPosts);

const formButton = document.getElementById("addPost");
formButton.addEventListener("submit", addPost);
