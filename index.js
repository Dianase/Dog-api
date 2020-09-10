let numOfDogs = $('#get-dog-pics').val();
let BASE_URL = `https://dog.ceo/api/breeds/image/random/${numOfDogs}`;

 console.log(numOfDogs);

function fetchDogImages() {
  fetch(BASE_URL)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayDogs(json) {
  let dogImage = json.message;
  $('.puppy-pics').html(`<img src="${dogImage}" alt="puppy-pic">`);
}

function submitListener(event) {
  $('form').submit(function(){
    event.preventDefault();
    fetchDogImages();
  });
}

$(submitListener());

$(function () {
  console.log('App loaded! Waiting for submit')
  
})