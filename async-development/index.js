let buttonFind = document.getElementById('buttonId');
let ul = document.getElementById('ul');
let clearAll = document.getElementById('clearAllButton');
let myWeatherButton = document.getElementById('myWeatherButton');
let input = document.getElementById('inputId');

// add new city
buttonFind.addEventListener('click', function(){   
    if(ul.childElementCount < 8){
        createCity();
    }else{
        alert('Почисти список!');
    }
});

// my city by location
myWeatherButton.addEventListener('click', function(){ 
    if(ul.childElementCount < 8){      
        addMtCityBYLlocation();
    }else{
        alert('Почисти список!')   
    }
})

// create delete button
function deleteButton(){ 
    let liDeleteButton = document.createElement('button');
    liDeleteButton.id = 'liDeleteButton'
    liDeleteButton.appendChild(document.createTextNode('Удалить'));

    liDeleteButton.addEventListener('click', function(event){
        ul.removeChild(event.target.parentNode);
    }) 
    return liDeleteButton;
}

//delete all button
clearAll.addEventListener('click', function(){
    ul.innerHTML = '';
})

// add a new city function
function createCity(){
    fetch('http://api.apixu.com/v1/current.json?key=61b56aaf9e934612b7d181411193007&q=' + input.value)
        .then(response => response.json())
        .then((info) => {
            createLi(info);
        })
    .catch((error) => {
        console.log(error);
    })
    input.value = '';
};

// add a new city by your location
function addMtCityBYLlocation(){
    navigator.geolocation.getCurrentPosition(({coords}) => myWeather(`${coords.latitude},${coords.longitude}`));
    let myWeather = value => fetch(`http://api.apixu.com/v1/current.json?key=61b56aaf9e934612b7d181411193007&q=${value}`)
    .then(response => response.json())
    .then((info) => {
        createLi(info);
    })
    .catch(error => console.log(error));
}

//create new li with city
function createLi(info){
    let li = document.createElement('li'); 
    li.innerHTML = info.location.name + ', ' + info.location.country + ', ' + info.current.temp_c + '°C, ' + "Wind: " + info.current.wind_kph + " km/h";
    li.appendChild(deleteButton());
    ul.appendChild(li); 
}