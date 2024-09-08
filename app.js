function search() {
    let section = document.getElementById("results");
    let search = document.getElementById("search").value;     

    let resultados = "";

    if (!search) {
        section.innerHTML = "Informe o nome de um cachorrinho para realizar a busca.";
        return;
    }

    let filter = search.toLowerCase();
    let name = "";

    for (let item of data) {
        name = item.name.toLowerCase();

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

    if (!resultados)
        resultados = `A DitaPetz não tem nenhum cachorrinho com nome ${search}.`;    

    section.innerHTML = resultados;
}