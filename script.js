const apiKey ='0d6ad72d49a7ad53e18459699d5f5bb0'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=praha'

async function checkWeather(){
   const response = await fetch(apiUrl + `&appid=${apiKey}`)
   let data = await response.json()

   console.log(data)
}

checkWeather()