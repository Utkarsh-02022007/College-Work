const API_KEY='0133cc5316757ac730cc46ae342334e4'
const form=document.querySelector('#weatherForm')
form.addEventListener('submit', async(event)=>{
    event.preventDefault()
    const searchedCity=city.value
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${API_KEY}`)
    const data=await response.json()
    console.log(data)
    console.log("City: " , data.name)
    console.log("Temperature: " , data.main.temp-273.15).tofixed(1),"°C"
    console.log("Weather: " , data.weather[0].main)
    console.log("Humidity: " , data.main.humidity, "%")
    console.log("Wind Speed: " , data.wind.speed)
    weatherInfo.innerHTML=`
    <h3> Weather Info </h3>
    <p>City: ${data.name}</p>
    <p>Temp: ${(data.main.temp-273.15.tofixed(1))}C</p>
    <p>Weather: ${data.weather[0].main}</p>
    <p>Humidity: ${data.main.humidity}</p>
    <p>Wind: ${data.Wind.speed} m/s</p>
    `
})