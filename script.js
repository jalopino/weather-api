let link = "http://api.weatherapi.com/v1/current.json?key=f589fb7ab9ba46e184c101743222211&q=Bacolod&aqi=no"
function Func(url) {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let feed = data;
        console.log(JSON.stringify(feed));
        document.getElementById("name").innerHTML = feed.location.name
        document.getElementById("img").src = "https:" + feed.current.condition.icon
        document.getElementById("condition").innerHTML = feed.current.condition.text
        document.getElementById("country").innerHTML = feed.location.country
        document.getElementById("temp").innerHTML = feed.current.temp_c
    })
  }  