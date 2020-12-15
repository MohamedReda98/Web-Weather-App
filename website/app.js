/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
// get data
const fetch = require('node-fetch');
let zip = 90001;
let newData = {};
const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=f6aa84e5214941d9aab6e36585c2dc5d&units=metric`;
const getApi =async () =>{
    const response = await fetch(url,{
        method:'POST',
        credentials: "same-origin",
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(newData),
    });
    try{
        newData = await response.json();
        console.log(newData.main.temp);
        return newData;
    }
    catch (error){
        console.log('error',error);
    }
}
getApi();