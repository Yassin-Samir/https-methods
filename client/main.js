async function fetch1() {
  const data = await (await fetch("http://localhost:3000/users")).json();
  console.log(data);
}
document.querySelector(".fetch").addEventListener("click", fetch1);
async function post() {
  const data = await (
    await fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify({
        name: "yassin",
        age: 13,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();
  console.log(data);
}
document.querySelector(".post").addEventListener("click", post);

function put() {
  fetch("http://localhost:3000/users", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      name: "samir",
      age: 34,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
document.querySelector(".put").addEventListener("click", put);

function delete1() {
  fetch("http://localhost:3000/users", {
    method: "DELETE",
    body: JSON.stringify({
      id: 3,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
document.querySelector(".delete").addEventListener("click", delete1);
