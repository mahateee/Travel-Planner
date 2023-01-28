import { getWeather, getPixabay, getDate } from "./api.js";
/**
 * This function to handle the submited value
 */
let projectData = {};
async function handleSubmit() {
    const city_name = document.getElementById('name').value;
    console.log("heyko")
    console.log(city_name)
    //console.log(url);
    await fetch("http://localhost:8081/add", {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city_name })
    }).then((response) => response.json())
        .then((data) => {
            projectData = {
                cityName: data.cityName,
                country: data.country,
                latitude: data.latitude,
                longitude: data.longitude,
            }
            return projectData;
        }).then((data) => {
            getDate();
            return data;
        }).then((data) => {
            getWeather(data.latitude, data.longitude).then((data) => {
                return data;
            }).then((data) => {
                getPixabay(data.cityName, data.country).then((data) => {
                    return data;
                }).then((data) => {
                    updateUI(data);
                });
            })
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

/**
 * This function to update html element with fetched data
 * @param {*} data  
 */
const updateUI = (data) => {
    let section = document.getElementsByClassName("container-2");
    let cityDiv = document.createElement("div");
    cityDiv.classList.add("trip");
    cityDiv.innerHTML=`<i class="fa-solid fa-plane"></i>
                <h5>Upcoming Trip</h5>
                <img src="${data.pic}" alt="">
                <h6><span class="city">${data.cityName}, </span> <span class="country">${data.country}</span></h6>
                <h6>Day: ${data.day}</h6>
                <h6 class="weather">Weather : <span> ${data.weather} </span></h6>
                <button class="primary">Read More</button>
                <button class="secondry">Join Us</button>`
            
    section[0].appendChild(cityDiv);
}
export { handleSubmit , projectData ,updateUI}
