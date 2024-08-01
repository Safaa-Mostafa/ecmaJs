const url = `https://jsonplaceholder.typicode.com/users`;
const header = document.querySelector("header");
const section = document.querySelector("section");

fetch(url)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Not 2xx response", {
        cause: res,
      });
    } else {
      return res.json()
        .then((res) => getUsersInfo(res))
        .catch((e) => {
          throw new error(e.message);
        });
    }
  })
  .catch((error) => {
    console.error(error);
  });

  
function getUsersInfo(res) {
  let users = res;
  users.map((el) => drewEle(el));
}
function drewEle(el) {
  let div = document.createElement("div");
  div.setAttribute("class", "userDesign");
  div.innerHTML = el.name;
  header.appendChild(div);
  div.addEventListener("click", () => HandlePosts(el));
}
function drewPosts(el) {
  let div = document.createElement("div");
  div.innerHTML = el.title;
  section.appendChild(div);
}
let HandlePosts = async (el) => {
  let user = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${el.id}`
  );
  let userData = await user.json();
  section.innerHTML = "";
  userData.forEach((el) => drewPosts(el));
}