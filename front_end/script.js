const searchinput = document.querySelector("#search-input");
const searchresult = document.querySelector("#search-results");
const close = document.querySelector("#closeIcon");
const inputwrapper = document.querySelector(".input-wrapper");
const hr = document.querySelector("hr");
searchinput.addEventListener("keyup", () => {
  searchresult.innerHTML = "";
  if (searchinput.value == "") {
    inputwrapper.style["border-radius"] = "0.5rem";
    hr.style["display"] = "none";
    searchresult.innerHTML = "";
  } else {
    inputwrapper.style["border-radius"] = " 0.5rem 0.5rem 0 0";
    hr.style["display"] = "block";
    getAnimeNames();
  }
});

close.addEventListener("click", () => {
  searchinput.value = "";
  inputwrapper.style["border-radius"] = "0.5rem";
  hr.style["display"] = "none";
  searchresult.innerHTML = "";
});

window.addEventListener("click", () => {
  // searchinput.value = "";
  inputwrapper.style["border-radius"] = "0.5rem";
  hr.style["display"] = "none";
  searchresult.style.display = "none";
});
searchinput.addEventListener("click", () => {
  //as long as the search input is not empty, the hr & border radius will work
  if (searchinput.value != "") {
    searchresult.style.display = "block";
    inputwrapper.style["border-radius"] = " 0.5rem 0.5rem 0 0";
    hr.style["display"] = "block";
  }
})

document.querySelector(".results-wrapper").addEventListener("click", (event) => {
  event.stopPropagation();
});
function getAnimeNames() {
  fetch(`data/${searchinput.value}`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);

      return response.json();
    })
    .then((data) => {
      if (data.length === 0) {
        document.querySelector(".input-wrapper").style["border-radius"] = "0.5rem";
        document.querySelector("hr").style["display"] = "none";
      }
      // console.log(data);
      buildList(data);
    })
    .catch((error) => {
      console.error(error);
      alert("Something went wrong when trying to get the data, refresh or try again later")
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
