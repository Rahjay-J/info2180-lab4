document.getElementById("search-btn").addEventListener("click", function () {
    fetch("superheroes.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text(); // Retrieve the HTML content
      })
      .then((data) => {
        // Display the list in an alert box
        alert(data);
      })
      .catch((error) => {
        console.error("Error fetching superhero data:", error);
        alert("Failed to fetch superhero data. Please try again later.");
      });
  });
  