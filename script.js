// Function to fetch data from the API
async function fetchData() {
    try {
        const response = await fetch('http://ip-api.com/json/');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to render data in cards
async function renderData() {
    const container = document.querySelector('.container');
    const data = await fetchData();

    if (!data) {
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const country = document.createElement('h2');
        country.textContent = item.country;

        const regionName = document.createElement('p');
        regionName.textContent = item.regionName;

        card.appendChild(country);
        card.appendChild(body);
        container.appendChild(card);
    });
}

// Call the renderData function to display data
renderData();
