(async () => {
  console.log(await (await fetch("http://localhost:3000/users")).json());
})();
