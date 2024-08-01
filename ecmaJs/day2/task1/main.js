const url = `https://jsonplaceholder.typicode.com/users`;
const header = document.querySelector("header");
const section = document.querySelector("section");

function fetchUsers() {
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Not 2xx response", {
          cause: res,
        });
      } else {
        return res.json();
      }
    })
    .then((users) => {
      displayUsers(users);
    })
    .catch((error) => {
      console.error(error);
    });
}

function displayUsers(users) {
  users.forEach((user) => {
    let div = document.createElement("div");
    div.setAttribute("class", "userDesign");
    div.innerHTML = user.name;
    div.addEventListener("click", () => handlePosts(user));
    header.appendChild(div);
  });
}

async function handlePosts(user) {
  let userPosts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
  );
  let userData = await userPosts.json();
  section.innerHTML = "";

  userData.forEach((post) => {
    let div = document.createElement("div");
    div.innerHTML = post.title;
    section.appendChild(div);
  });
}

fetchUsers();