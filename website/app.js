/* Global Variables */
let newData = {};
let zip ;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);
async function performAction() {
    try {
        const inpZip = document.getElementById('zip').value;
        console.log(inpZip)
        zip = inpZip;
        const inpFeelings = document.getElementById('feelings').value;
        if (inpZip === '' /*|| typeof inpZip !=='number' || inpZip.length!==5*/) {
            alert("Please enter valid zip code")
        } else {
            let tempreture = await getApi().main.temp;
            console.log(tempreture)
            await postData('/allData', {date:newDate,tempreture:tempreture,feelings:inpFeelings});
            await updateUI();
        }
    }
    catch (error) {
        console.log('error',error)
    }
}
// Personal API Key for OpenWeatherMap API
// get data
const getApi =async () =>{
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=f6aa84e5214941d9aab6e36585c2dc5d&units=metric`,{
        method:'POST',
        credentials: "same-origin",
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(newData),
    });
    try{
        newData = await response.json();
        console.log(newData)
        return newData;
    }
    catch (error){
        console.log('error',error);
    }
}
/* Function to GET Web API Data*/
const postData =async (url = '',data = {}) =>{
    const response = await fetch(url,{
        method:'POST',
        credentials: "same-origin",
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data),
    });
    try{
        const postData = await response.json();
        console.log(postData);
        return postData;
    }
    catch (error){

        console.log('error',error);
    }
}
// update the UI
const updateUI = async ()=>{
    const request = await fetch('/update')
    try{
        const upData = await request.json();
        console.log(upData);
        document.getElementById('date').innerHTML=upData.date;
        document.getElementById('temp').innerHTML=upData.tempreture;
        document.getElementById('content').innerHTML=upData.feelings;
    }
    catch (error){
        console.log('error',error);
    }
}