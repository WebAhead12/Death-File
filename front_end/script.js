const searchinput = document.querySelector("#search-input");
const searchresult = document.querySelector("#search-results");
const close = document.querySelector("#closeIcon");
const inputwrapper = document.querySelector(".input-wrapper");
const hr = document.querySelector("hr");

//Shows the search results if the search bar is not empty
searchinput.addEventListener("keyup", () => {
  searchresult.innerHTML = "";
  //This creates the styling for the search bar's bottom-border-radius when it's empty
  if (searchinput.value == "") {
    inputwrapper.style["border-radius"] = "0.5rem";
    hr.style["display"] = "none";
    searchresult.innerHTML = "";
  } else {
    //This gives the search bar a specific border radius when the results box is not empty 
    inputwrapper.style["border-radius"] = " 0.5rem 0.5rem 0 0";
    hr.style["display"] = "block";
    getAnimeNames();
  }
});
//Makes the close icon clear the search input
close.addEventListener("click", () => {
  searchinput.value = "";
  inputwrapper.style["border-radius"] = "0.5rem";
  hr.style["display"] = "none";
  searchresult.innerHTML = "";
});
//When you click outside of the search results, it hides the search results
window.addEventListener("click", () => {
  // searchinput.value = "";
  inputwrapper.style["border-radius"] = "0.5rem";
  hr.style["display"] = "none";
  searchresult.style.display = "none";
});

searchinput.addEventListener("click", () => {
  //as long as the search input is not empty, the hr & border radius will work
  if (searchinput.value != "") {
    getAnimeNames();
    searchresult.style.display = "flex";
    inputwrapper.style["border-radius"] = " 0.5rem 0.5rem 0 0";
    hr.style["display"] = "block";
  }
})
// disables the search results box from closing when you click on something inside the results box.
document.querySelector(".results-wrapper").addEventListener("click", (event) => {
  event.stopPropagation();
});

//fetch the hardcoded anime names in dataObject.js in the handler fodler.
function getAnimeNames() {
  fetch(`data/${searchinput.value}`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);

      return response.json();
    })
    //This is so that when the user's search does not yield a result, the bottom border radius of the search bar remains
    .then((data) => {
      if (data.length === 0) {
        document.querySelector(".input-wrapper").style["border-radius"] = "0.5rem";
        document.querySelector("hr").style["display"] = "none";
      }

      buildList(data);
    })
    .catch((error) => {
      console.error(error);
      alert("Something went wrong when trying to get the data, refresh or try again later")
    });
}
//creates the search results
function buildList(data) {
  console.log(data);
  data.forEach((element) => {
    let resultbox = document.createElement("span");
    resultbox.classList.add("result-box");
    resultbox["textContent"] = element;
    searchresult.appendChild(resultbox);

    //gives the search results an event listener so that when the user clicks the name, it appears in the search input
    resultbox.addEventListener("click", () => {
      searchinput.value = resultbox.textContent;
      inputwrapper.style["border-radius"] = "0.5rem";
      hr.style["display"] = "none";
      searchresult.innerHTML = "";
    });
  });
}

