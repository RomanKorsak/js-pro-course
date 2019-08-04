let buttonFind = document.getElementById('buttonId');
let ul = document.getElementById('ul');
let clearAll = document.getElementById('clearAllButton');
let myWeatherButton = document.getElementById('myWeatherButton');

buttonFind.addEventListener('click', function(){   
    if(ul.childElementCount < 8){
        let input = document.getElementById('inputId');
        fetch('http://api.apixu.com/v1/current.json?key=61b56aaf9e934612b7d181411193007&q=' + input.value)
        .then(response => response.json())
        .then((info) => {
        let li = document.createElement('li'); 
        li.innerHTML = info.location.name + ', ' + info.location.country + ', ' + info.current.temp_c + '°C, ' + "Wind: " + info.current.wind_kph + " km/h ";
        li.appendChild(deleteButton());
        ul.appendChild(li); 
    })
    .catch((error) => {
        console.log(error);
    })
   //input.value = '';
    }else{
        alert('Почисти список');
}
});

// my city by location
myWeatherButton.addEventListener('click', function(){ 
    if(ul.childElementCount < 8){      
        navigator.geolocation.getCurrentPosition(({coords}) => myWeather(`${coords.latitude},${coords.longitude}`));
        let myWeather = value => fetch(`http://api.apixu.com/v1/current.json?key=61b56aaf9e934612b7d181411193007&q=${value}`)
        .then(response => response.json())
        .then((info) => {
        let li = document.createElement('li'); 
        li.innerHTML = info.location.name + ', ' + info.location.country + ', ' + info.current.temp_c + '°C, ' + "Wind: " + info.current.wind_kph + " km/h";
        li.appendChild(deleteButton());
        ul.appendChild(li);
        })
        .catch(error => console.log(error));
    }else{
        alert('Почисти список!')   
    }
})


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