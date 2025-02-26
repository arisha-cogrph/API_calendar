//declare variable of the year, months, and day first. use const coz it cannot be changed.
const years = document.getElementById("year")
const months = document.getElementById("month")
const days = document.getElementById("day-input")
const dayPlusBtn = document.getElementById("day-plus")
const dayMinusBtn = document.getElementById("day-minus")
const message = document.getElementById("message")
const messageDate = document.getElementById("message-date")
//finish declaration


let day = "";
let month = "";
let year = "";
let url = "";

//this is to declare the function to get the dates
function getDate() {
    const today = new Date(); //here is to declare that what you want to get is today's dating
    day = today.getDate();
    month = today.getMonth();
    year = today.getFullYear();

    console.log(month);

    dateString = today.toString();
    //toString is to converts the Date object into a human readable string format.

    //updating the HTML elements (years, months, days) by inserting data value. so that in web the today's calender will be returned
    years.innerHTML = year
    months.innerHTML = dateString.split(" ")[1]
    days.innerHTML = day

    url = `https://byabbe.se/on-this-day/${month + 1}/${day}/events.json`;
    //why add +1 is because the API counts from 0 (in terms of months they count by number)
    //so if you want to add the correct current month you have to set to add +1

    getApiData();

    function getApiData() {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                let dataLength = data.events.length;
                let randomNumber = Math.floor(Math.random() * dataLength)
                messageDate.innerHTML = `On the ${day}/${month + 1}/${data.events[randomNumber].year}`;
                message.innerHTML = data.events[randomNumber].description;
            })
    }
}

getDate();