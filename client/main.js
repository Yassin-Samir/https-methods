(async () => {
  const delete1 = await (
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
  console.log(delete1);
  const data2 = await (await fetch("http://localhost:3000/users")).json();
  console.log(data2);
  data2.map((i) => {
    console.log("fs");
    const p = document.createElement("p");
    const name = i.Name;
    p.textContent = name;
    document.body.append(p);
  });
})();
