/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);
function performAction() {
    const inpZip = document.getElementById('zip').value;
    const inpFeelings = document.getElementById('feelings').value;
    if (inpZip=='' || typeof inpZip !='number' || inpZip.length!==5){alert("Please enter valid zip code")}
    else{
        zip=inpZip;
        console.log(getApi());
    }
}
// Personal API Key for OpenWeatherMap API
// get data
let zip = 85005;
let newData = {};
const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=f6aa84e5214941d9aab6e36585c2dc5d&units=metric`;
const getApi =async () =>{
    const fetch = require('node-fetch');
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
