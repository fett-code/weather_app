//getting data using function


// const apiKey ="4b96420d208342c3832172656232309";
// const apiUrl ="http://api.weatherapi.com/v1/current.json?q=rabat";
// async function checkWeather(){
//     const response =await fetch(apiUrl+`&key=${apiKey}`);
//     var data=await response.json();
//     console.log(data)
//     return data
// }
// console.log(data)
// const data = checkWeather();
// data.then((res)=>{
//     document.querySelector(".city").innerHTML=res.location.name;
//     document.querySelector(".temp").innerHTML=res.current.temp_c;
//     document.querySelector(".humidity").innerHTML=res.current.humidity;
//     document.querySelector(".wind").innerHTML=res.current.wind_mph;

// })


// getting data using async function

const city= document.querySelector(".city");
const temp= document.querySelector(".temp");
const humidity= document.querySelector(".humidity");
const wind= document.querySelector(".wind");
const icon= document.querySelector(".weather-icon")

  
const apiKey ="4b96420d208342c3832172656232309";
const apiUrl ="http://api.weatherapi.com/v1/current.json?q=";

// if you want this code to function you need to replace form  with div
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
// async function checkWeather(city){
//     const response =await fetch(apiUrl+city+`&key=${apiKey}`);
//     var data=await response.json();
//     console.log(data)
//     return data
// } 

// async function main(){
//     const res =   await checkWeather('marrakech');
//     city.innerHTML=res.location.name;
//     temp.innerHTML=Math.round(res.current.temp_c)+"°C";
//     humidity.innerHTML=res.current.humidity+"%";
//     wind.innerHTML=res.current.wind_mph+"km/h";
// }

// main();
// searchbtn.addEventListener("click",async ()=>{
//     const res= await checkWeather(searchbox.value);
//     city.innerHTML=res.location.name;
//     temp.innerHTML=Math.round(res.current.temp_c)+"°C";
//     humidity.innerHTML=res.current.humidity+"%";
//     wind.innerHTML=res.current.wind_mph+"km/h";
// })




const search= document.forms[0]

async function checkWeather(city){
    const response =await fetch(apiUrl+city+`&key=${apiKey}`);
    var data=await response.json();
    console.log(data)
    return data
} 

async function main(e){
    if(e != undefined){
        e.preventDefault();
    }
    const res =   await checkWeather(searchbox.value);
    city.innerHTML=res.location.name;
    temp.innerHTML=Math.round(res.current.temp_c)+"°C";
    humidity.innerHTML=res.current.humidity+"%";
    wind.innerHTML=res.current.wind_mph+"km/h";
    icon.src = res.current.condition.icon;

}

main();
search.addEventListener("submit", main)




