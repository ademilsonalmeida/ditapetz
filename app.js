// Function to search for dog names
function search() {
    // Get references to the results section and search input
    let section = document.getElementById("results");
    let searchTerm = document.getElementById("search").value; // Corrected variable name
  
    // Initialize the results string
    let resultados = "";
  
    // Check if search term is empty
    if (!searchTerm) {
      section.innerHTML = "Informe o nome de um cachorrinho para realizar a busca.";
      return;
    }
  
    // Convert search term to lowercase for case-insensitive search
    let filter = searchTerm.toLowerCase();
  
    // Loop through dog data
    for (let item of data) {
      // Get the dog's name in lowercase for comparison
      let name = item.name.toLowerCase();
  
      // Check if the search term is included in the dog's name (case-insensitive)
      if (name.includes(filter)) {
        resultados += `
          <div class="result-item">
            <img class="picture" src="${item.image}" alt="">
            <div class="details">
              <h3>
                ${item.name}${item.title}
              </h3>
              <p>${item.description}</p>
            </div>
          </div>
        `;
      }
    }
  
    // Handle no matching results
    if (!resultados) {
      resultados = `A DitaPetz não tem nenhum cachorrinho com nome ${searchTerm}.`;
    }
  
    // Update the results section with the search results
    section.innerHTML = resultados;
  }