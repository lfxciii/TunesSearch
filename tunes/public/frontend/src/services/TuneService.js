export default class TuneService {
    // getFavourites = () => {
    //     return JSON.parse(sessionStorage.getItem("favourites"));
    // }

    // removeFavourite = (id) =>{

    // }
    // getFavourites = () => {
    //     return fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + ",za&units=metric&APPID=" + process.env.REACT_APP_WEATHER_API_KEY);
    // }

    searchTunes = (keys) =>{
        let response = await fetch(`/itunes/search/${keys.term}/${keys.entity}`);

    }
}