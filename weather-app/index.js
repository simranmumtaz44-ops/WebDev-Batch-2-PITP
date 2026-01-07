require('dotenv').config();
const axios = require('axios');

// Default city Jamshoro, terminal se override kiya ja sakta hai
const city = process.argv[2] || "Jamshoro";

const apiKey = process.env.API_KEY;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(url)
    .then(response => {
        const data = response.data;
        console.log(`Weather in ${data.name}:`);
        console.log(`Temperature: ${data.main.temp}°C`);
        console.log(`Condition: ${data.weather[0].description}`);
    })
    .catch(error => {
        console.log("Error fetching weather. Check city name or API key.");
    });
