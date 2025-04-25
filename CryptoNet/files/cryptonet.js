//Get tbody element where info will be displayed

const tbody = document.getElementById("tbody");

//Getting crypto info from CoinGecko

const fetchCryptoData = async () => {

    try {

    let api_url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10`;

    let response = await fetch(api_url);

    let data = await response.json();

    cryptoDisplay(data);

    } catch(error) {

        console.error(error);

    }

}

const cryptoDisplay = (data) => {

    let table = '';

    data.forEach(coin => {

        let formattedCurrentPrice = coin.current_price.toLocaleString('en-CA', {style: 'currency', currency: 'CAD'});

        //Creating table rows for coin data

        table += `<tr>

        <td class="h-20 border-b border-b-gray-400">${coin.market_cap_rank}</td>
        <td class="border-b border-b-gray-400"><img src="${coin.image}" class="w-9 h-9 m-auto"</td>
        <td class="border-b border-b-gray-400">${coin.name}</td>
        <td class="border-b border-b-gray-400">${formattedCurrentPrice}</td>
    
        <td class="border-b border-b-gray-400">${coin.price_change_24h > 0 ? `<i class="fa-solid fa-caret-up" style="color: #00ff33;"></i> ${coin.price_change_24h.toFixed(5)}` : `<i class="fa-solid fa-caret-down" style="color: #ff0000;"></i> ${coin.price_change_24h.toFixed(5)}`}</td>

        <td class="border-b border-b-gray-400">${coin.market_cap_change_percentage_24h > 0 ? `<i class="fa-solid fa-caret-up" style="color: #00ff33;"></i> ${coin.market_cap_change_percentage_24h.toFixed(2)}` : `<i class="fa-solid fa-caret-down" style="color: #ff0000;"></i> ${coin.market_cap_change_percentage_24h.toFixed(2)}` } </td>
        
        </tr>`
    });

    //Inserting table rows into tbody

    document.getElementById('tbody').innerHTML = table;

}

fetchCryptoData();

