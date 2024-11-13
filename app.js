async function getData() {
  //fetch returns a promise
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  console.log(response);
}
getData();
