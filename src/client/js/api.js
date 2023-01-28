import { projectData  } from "./formHandler.js";

function getDate() {
    const date1 = document.getElementById('start').value;
    const date2 = document.getElementById('end').value;
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    //time difference  
    let time_difference = d2.getTime() - d1.getTime();
    //calculate days difference  
    let result = time_difference / (1000 * 60 * 60 * 24);
    projectData.day = result;
}
async function getPixabay(cityName, country) {
    let pic;
    const pixabayKey = '32612189-3c293cb5c9ab9a14d78641d3a';
    const pixabayUrl = `https://pixabay.com/api/?key=${pixabayKey}&q=${cityName}+${country}&image_type=photo`;
    await fetch(pixabayUrl)
        .then(res => res.json())
        .then((data) => {
            pic = data.hits[0].largeImageURL;
        }).then(() => {
            projectData.pic = pic;
            return projectData;
        })
        .catch((error) => console.log("Error " + error));
    return projectData;
};

async function getWeather(lat, lon) {
    let weat;
    const weatherKey = '709d93fe42044bbd9bf9a558bf95609c';
    const endpoint = 'https://api.weatherbit.io/v2.0/forecast/daily?' + `lat=${lat}&lon=${lon}&key=` + weatherKey;
    await fetch(endpoint).then(res => res.json()).then((data) => {
        weat = data.data[0].weather.description;
    }).then(() => {
        projectData.weather = weat;
        return projectData;
    }).catch(error=>console.log("error"))
    return projectData;
}

export { getWeather, getPixabay, getDate}
