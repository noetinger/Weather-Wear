// divs for posting the weather and clothing suggestions
let weatherView = document.getElementById('weather-view')
let clothingView = document.getElementById('clothing-view')

//Global Variable
var dateInputValue ;
var genderInputValue;
var temperature;
var weatherConditions;

// submitBtn to pull values of gender, zipcode, and dateTravel inputs
document.getElementById('submit').onclick = function() {
    let genderInput = document.getElementById('gender-form').value
    var zipInput = document.getElementById("zipcode-input").value;
    let dateTravel = document.getElementById('days-form').value

    genderInputValue = genderInput;
    dateInputValue = dateTravel;

    console.log('Gender Chosen: ' + genderInput)
    console.log('Zipcode Typed: ' + zipInput)
    console.log('Date Value Chosen: ' + dateTravel)

    document.getElementById('zipcode-input').value = ''
    getWeather(zipInput)

}

let clothesfromTemp = function () {
    if (temp >= 75) {
        console.log('Is is 70 degrees or more')
    } else if (temp < 75 && temp >= 55) {
        console.log('It is between 50 and 70 degrees')
    } else if (temp < 55) {
        console.log('Is it below 50 degrees')
    }
}

let accessoriesrfromPrecip = function () {
    if (precipChance >= 60 && precipType === 'snow') {
        console.log('There is a great chance it will snow')
    } else if (precipChance >= 60 && precipType === 'rain') {
        console.log('There is a great chance it will rain')
    } else if (precipChance < 60 && precipChance >= 30 && precipType === 'snow') {
        console.log('Chance of slush, flutters, and needing to shovel snow')
    } else if (precipChance < 60 && precipChance >= 30 && precipType === 'rain') {
        console.log('Bring an umbrella just in case')
    } else {
        console.log('We may be freezing')
    }
}
//************************************** Nick's Open Weather API******************************** */

//Call API and search for requested giphy
function getWeather(zipcode) {
    console.log("Open Weather API Search Enabled! Yeet!")
    console.log("getWeather Function Input: " + zipcode)

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?zip=" + zipcode + "&appid=37857072468d87a5127698015d17b9e0"
    
    $.ajax({
        url: queryURL,
        method: "GET"
        })
    .done(function(response){
            displayWeather(response);
        })
}

//Display weather information
function displayWeather(response) {

    console.log("Nick's Date Input Value " + dateInputValue)

    console.log("Display Weather Function Enabled")
    console.log("This is the response (below)")
    console.log(response)

    document.getElementById("weather-view").empty;

    //Apending weather information to the HTML
    //If Day 1 is selected...
    if(dateInputValue == 1){
        var dayOne = response.list[5]

        console.log("Day 1 Temp: " + dayOne.main.temp)
        console.log("Day 1 Description: " + dayOne.weather[0].description)
        console.log("Day 1 Cond. ID: " + dayOne.weather[0].id)

        //create new table row
        var newRow = document.createElement("tr");
        //create new data cells in row
        var newDataTemp = document.createElement("td");
        var newDataCond = document.createElement("td");
        //create variables to append to data cells
        var temp = document.createTextNode(dayOne.main.temp);
        var cond = document.createTextNode(dayOne.weather[0].description);
        //append variables to data cells
        newDataTemp.appendChild(temp);
        newDataCond.appendChild(cond);
        //append data cells to row
        newRow.appendChild(newDataTemp);
        newRow.appendChild(newDataCond);
        //append newRow to HTML
        let weatherDisplay = document.getElementById('weather-chart')
        weatherDisplay.appendChild(newRow);

        temperature = temp;
        weatherConditions = cond;

        //this.list[5]
    }

    //If Day 2 is selected...
    else if(dateInputValue === 2){
        var dayTwo = response.list[13]

    }

    //If Day 3 is selected...
    else if(dateInputValue === 3){
        var dayThree = response.list[21]

    }

    //if Day 4 is selected...
    else if(dateInputValue === 4){
        var dayFour = response.list[29]

    }

    //if Day 5 is selected...
    else if(dateInputValue === 5){
        var dayFive = response.list[37]

    }

            // //create new row
            // var newRow = $("<tr>").append(
            //     $("<td>").text(trainName),
            //     $("<td>").text(dest),
            //     $("<td>").text(freq),
            //     $("<td>").text(nextArrival),
            //     $("<td>").text(minutesAway)
            // );
    
            // $("#train-table").append(newRow);

//What am I appending to? #weather-view

};