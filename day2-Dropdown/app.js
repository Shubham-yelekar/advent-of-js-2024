const dataUrl = "./data.json";
let tenData;
// Fetch the data from the URL
fetch(dataUrl)
  .then((response) => response.json())
  .then((data) => {
    tenData = data.slice(0, 9);
    // const filterData = tenData.filter((item) => item.Title === "2. Die Hard");
    // console.log(tenData);
    renderList(tenData)
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const dropdown = document.querySelector(".dropdown");
const input = document.querySelector(".dropdown input");
const dropdownBox = document.getElementById("dropdown_items_box")

dropdown.addEventListener("click", function () {
  if (dropdown.classList.contains("open")) {
    dropdown.classList.remove("open");
    dropdownBox.style.display = "flex"
    input.blur();
  } else {
    dropdown.classList.add("open");
    dropdownBox.style.display = "hidden"
    input.focus();
  }
});

// console.log(tenData)

function renderList(list) {
  list.forEach(item => {
    const cleanedTitle = item.Title.replace(/^\d+\.\s*/, ""); // Remove leading numbers and dot
    console.log(cleanedTitle);
    const element = `
    <div
       data-movieName="${item.Title}"
        class="flex gap-4 p-4 hover:bg-blue-500 hover:text-white transition duration-200 cursor-pointer"
      >
        <div class="w-[56px]">
          <img
            src="${item.Image}"
            alt=""
          />
        </div>
        <div class="flex flex-col align-center justify-center">
          <h2 class="text-2xl font-medium">${cleanedTitle}</h2>
          <h4 class="text-lg font-regular">${item.Year}</h4>
        </div>
      </div>`
      dropdownBox.innerHTML += element;
  });
}


