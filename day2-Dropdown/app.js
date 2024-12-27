const dataUrl = "./data.json";
let tenData;
// Fetch the data from the URL
fetch(dataUrl)
  .then((response) => response.json())
  .then((data) => {
    tenData = data.slice(0, 5);
    // const filterData = tenData.filter((item) => item.Title === "2. Die Hard");
    // console.log(filterData);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const dropdown = document.querySelector(".dropdown");
const input = document.querySelector(".dropdown input");

dropdown.addEventListener("click", function () {
  if (dropdown.classList.contains("open")) {
    dropdown.classList.remove("open");
    input.blur();
  } else {
    dropdown.classList.add("open");
    input.focus();
  }
});

function render
