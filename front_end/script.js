const searchinput = document.querySelector("#search-input");
const searchresult = document.querySelector("#search-results");
searchinput.addEventListener("keyup", () => {
  let i = 0;
  let response = getAnimeNames();
  console.log(response);
  searchresult.innerHTML = "";
  while (i < response.length) {
    let resultbox = document.createElement("span");
    resultbox.classList.add("result-box");
    resultbox.textContent = response[i];
    resultbox.addEventListener("click", () => {});
  }
});
function getAnimeNames() {
  fetch(`data/${searchinput.value}`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
}
// result-box (class name for earch results)
