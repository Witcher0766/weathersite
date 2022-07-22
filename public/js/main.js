
const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');

const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const getinfo = async(event) => {  // for preventing from reloading of the page we pass event and 
    event.preventDefault();
    let cityVal = cityName.value;
    // alert("hii")
    if(cityVal === ""){
        city_name.innerText = `Please write the name before you search`;
    }
    else {
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=2dc0ef37a6c861ebf7b4f8df272e4d4b`
        const response =  await fetch(url);
        const data = await response.json();
        const arrData = [data]; 
        // console.log(arrData);
        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp.innerText = arrData[0].main.temp;
        // temp_status.innerText = arrData[0].weather[0].main;
        // console.log(arrData[0].main.temp)
        // console.log(arrData[0].weather[0].main)


const tempMood = arrData[0].weather[0].main;
        // condition to check sunny or cloudy
        if(tempMood == "Sunny") {
            temp_status.innerHTML = " <i class= 'fa-solid fs fa-sun'></i>";
        } else if (tempMood == "clouds") {
            temp_status.innerHTML = 
            "<i class='fa-solid fa-clouds'></i>"
        } else if(tempMood == "Rain") {
              temp_status.innerHTML = 
            "<i class='fa-solid fa-cloud-rain'></i>"
        } else {
              temp_status.innerHTML = 
            "<i class='fa-solid fa-cloud'></i>"
        }

        }
        catch{
            city_name.innerText = `Please...! Enter the city name properly`;

        }
    }
}

submitBtn.addEventListener('click', getinfo);

