const searchinput = document.querySelector("#search-input");
const searchresult = document.querySelector("#search-results");
searchinput.addEventListener("keyup", () => {
  searchresult.innerHTML = "";
  if (searchinput.value == "") {
    searchresult.innerHTML = "";
  } else {
    getAnimeNames();
  }
});
function getAnimeNames() {
  fetch(`data/${searchinput.value}`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);

      return response.json();
    })
    .then((data) => {
      // console.log(data);
      buildList(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

function buildList(data) {
  console.log(data);
  data.forEach((element) => {
    let resultbox = document.createElement("span");
    resultbox.classList.add("result-box");
    resultbox["textContent"] = element;
    console.log(resultbox);
    searchresult.appendChild(resultbox);
    // resultbox.addEventListener("click", getAnimeNames());
  });
}
// result-box (class name for earch results)
