const inputBox=document.querySelector('.input-box');
const searchBtn= document.getElementById('searchbtn')
const weather_img=document.querySelector('.weather-img')
const temperature=document.querySelector('.tempreture');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementsByClassName('.wind-speed');

// const location_not_found=document.querySelector('.location_not_found');
// const weather_body=document.querySelector('.weather-body')

async function checkweather(city){
const api_key= "537274ae741e0653d24c7852311e2d8a";
const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
// url me city value pass hogi to ye url api key k help se data fetch krega hfir uska  data weather_data 


 const weather_data= await fetch(`${url}`).then(response=>
     response.json());

    // if(weather_data.cod=='404')

    //      {
    //          location_not_found.style.display="flex";
    //          weather_body.style.display="none";
    //          console.log(error);
    //          return;
    //      }


    console.log(weather_data);


// weather_body.style.display="flex";
// location_not_found.style.display="none";

temperature.innerHTML= `${Math.round(weather_data.main.temp)}°C`;
description.innerHTML=`${weather_data.weather[0].description}`;
// description.innerHTML=`${weather_data.weather[0]}`;
humidity.innerHTML=`${weather_data.main.humidity}%`;
// wind_speed.innerHTML=`${weather_data.wind.speed}km/h`;
wind_speed.innerHTML= `${Math.round(weather_data.wind.speed)}km/h`;

switch(weather_data.weather[0].main){
        case 'Clouds':
        weather_img.src="/img/cloud1.png";
        break;

        case 'Clear':
        weather_img.src="/img/clear.png";
        break;

        case 'Rain':
        weather_img.src="/img/frograin.png";
        break;

        case 'Mist':
        weather_img.src="/img/mist1.png";
        break;

        case 'Snow':
        weather_img.src="/img/snow.png";

        

}



// jise weatherdata m store krogi
// yha p jo bhi fecthc function me dogi yha p url de rhi hi or url me city h or city ka data fetch hjoga api se
// conclusojn weather data ka fetch(data ko json format me data deta h) city ka weather data fetch krke useko jo bhi milega astorie krega,agar usko shi data milta h to
// jo data yafetch k help se response milega wo .json me convert , response.json ka kaam hoga jo bhi data milega wo usko string me
// convet krega


/*
yha line me await h or await hm sirf usi function me lagate h jo async ho
await isliye karaya jisse ki ek baar me sara data ,weather_data var me store ho jaye

 */
}

/*jb search btn p clikc ho to ye usse pjhle di gai input value ko 
lekr uspe api apply krega ya apui ko dega to api  sear h krne nichec k humidity and
wind wale text me output show krenga*/

searchBtn.addEventListener('click', ()=>{
    checkweather(inputBox.value);
})