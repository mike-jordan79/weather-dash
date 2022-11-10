function searchForCites(city) {
    const url = "https://api.openweathermap.org/data/2.5/weather?"
    fetch(`${url}q=${city}&units=imperial&appid=7a1825adbfbb813952c83422765409b1`)
    .then(x => console.log(x));
}

searchForCites('boston')


// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=7a1825adbfbb813952c83422765409b1

// https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid
// https://api.openweathermap.org/data/2.5/weather?q=Miami&units=imperial&appid=7a1825adbfbb813952c83422765409b1
