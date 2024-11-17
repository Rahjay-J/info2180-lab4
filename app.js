document.getElementById("search-btn").addEventListener("click", function () {
    const searchInput = document.getElementById("search-input").value.trim();
    const resultContainer = document.getElementById("result");
  

    resultContainer.innerHTML = "";
    resultContainer.style.display = "none";
  
    // Fetch superheroes
    const url = `superheroes.php?query=${encodeURIComponent(searchInput)}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text(); 
      })
      .then((data) => {
        resultContainer.style.display = "block";
  
        if (data.trim() === "Superhero not found") {
          resultContainer.classList.add("error");
          resultContainer.innerHTML = `<p>${data}</p>`;
        } else {
          resultContainer.classList.remove("error");
          resultContainer.innerHTML = data;
        }
      })
      .catch((error) => {
        console.error("Error fetching superhero data:", error);
        resultContainer.style.display = "block";
        resultContainer.classList.add("error");
        resultContainer.innerHTML =
          "<p>Something went wrong. Please try again later.</p>";
      });
  });
  