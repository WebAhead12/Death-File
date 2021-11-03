const searchinput = document.querySelector("#search-input");
searchinput.addEventListener("keyup", () => {
  fetch(`data/${searchinput.value}`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      response.json();
    })
    .then((response) => {})
    .catch((error) => {
      console.error(error);
    });
});
