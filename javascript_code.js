var endpoint = "https://dog.ceo/api/breeds/image/random"
function fetchDog () {

    fetch(endpoint)
    .then (function(response){
        return response.json();
    })
    .then (function(data){
        displayImage(data.message);
    })
    .catch(function(){
        console.log("Error Occured");
    });
}

function displayImage(imageSource) {
    var image = document.querySelector('img');
    image.src = imageSource;

}

var a = document.querySelector('.new-dog');
var b = a.addEventListener('click' , fetchDog);