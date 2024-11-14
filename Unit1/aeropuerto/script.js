function continentesSelect() {
    const continentSelect = document.querySelector("#continentSelect");
    companies.forEach(continente => {
        const option = document.createElement("option");
        option.value = continente.continent;
        option.text = continente.continent;
        continentSelect.appendChild(option);
    });
}

function paisContinente(continenteSelect) {
    let listaPaises = [];
    if (continenteSelect) {
        const continente = companies.find(c => c.continent === continenteSelect);
        if (continente) {
            listaPaises = continente.countries;
        }
    } else {
        companies.forEach(c => {
            listaPaises = listaPaises.concat(c.countries);
        });
    }
    return listaPaises;
}

function mostrarPaises() {
    const continente = document.querySelector("#continentSelect").value;
    const tablaPaises = document.querySelector("#tablaPaises tbody");

    tablaPaises.innerHTML = "";

    let listaPaises = paisContinente(continente);

    listaPaises.sort((a, b) => a.name.localeCompare(b.name));

    listaPaises.forEach(pais => {
        const row = tablaPaises.insertRow();
        const celdaPais = row.insertCell(0);
        celdaPais.textContent = pais.name;
    });
}

function numCompanies() {
    const continent = document.querySelector("#continentSelect").value;
    const tablaPaises = document.querySelector("#tablaPaises tbody");

    tablaPaises.innerHTML = "";

    let listaPaises = paisContinente(continent);

    listaPaises.sort((a, b) => a.name.localeCompare(b.name));

    listaPaises.forEach(country => {
        const row = tablaPaises.insertRow();
        const countryCell = row.insertCell(0);
        countryCell.textContent = country.name;

        const companiesCountCell = row.insertCell(1);
        companiesCountCell.textContent = country.companies.length;
    });
}

function companiesPais() {
    const continent = document.querySelector("#continentSelect").value;
    const tablaPaises = document.querySelector("#tablaPaises tbody");

    tablaPaises.innerHTML = "";

    let listaPaises = paisContinente(continent);

    listaPaises.sort((a, b) => a.name.localeCompare(b.name));

    listaPaises.forEach(country => {
        const row = tablaPaises.insertRow();
        const countryCell = row.insertCell(0);
        countryCell.textContent = country.name;

        const companiesCountCell = row.insertCell(1);
        companiesCountCell.textContent = country.companies.length;

        const companiesNamesCell = row.insertCell(2);
        const airlinesNames = country.companies.map(airline => airline.name).join(", ");
        companiesNamesCell.textContent = airlinesNames;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    continentesSelect();
    mostrarPaises();

    // Asignar eventos a los botones
    document.querySelector("#showCountriesBtn").addEventListener("click", mostrarPaises);
    document.querySelector("#showCompaniesBtn").addEventListener("click", numCompanies);
    document.querySelector("#showAllBtn").addEventListener("click", companiesPais);
});
