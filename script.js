const apiKey="1080e30359e47cfeff4a778b4ed8bd4c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&=&units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")

async function checkWeater(city) {
    const response=await fetch(apiUrl + city +`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        // document.querySelector(".weather").style.display="none"
        document.querySelector(".city").innerHTML="";
        document.querySelector(".temp").innerHTML="";
    document.querySelector(".humidity").innerHTML="";
    document.querySelector(".wind").innerHTML="";
    }
    else{
        document.querySelector(".error").innerHTML="";
        var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.floor(data.main.temp)+"<sup>o</sup>c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="./Images/clouds.png"

    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="./Images/clear.png" 
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="./Images/rain.png" 
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="./Images/drizzle.png" 
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="./Images/mist.png" 
    }

    }
    
    

    
}

searchBtn.addEventListener("click",()=>{
checkWeater(searchBox.value);
})



