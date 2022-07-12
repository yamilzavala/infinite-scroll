//Api Unsplash
const apiKey = 'ohTyNO9Ul5jlwxaueNJJLnIG8YWJ4UDUUkZH1oWo3y0';
const countResult = 10;
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${countResult}`;

let photosArray = [];
const loader = document.getElementById('loader')
const container = document.getElementById('image-container')

//helper
function setAttributtes(element, attributes){
    for(const key in attributes){
        element.setAttribute(key, attributes[key])
    }
}

function displayPhotos() {
    //iterate in the array and for each photo
    photosArray.forEach(photo => {
        //create link and set attributes
        const item = document.createElement('a')        
        setAttributtes(item, {
            href: photo.links.html,
            target: '_blank'
        })
        //create img and set attributes
        const img = document.createElement('img')
        setAttributtes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        })
        //put img inside a, and then both inside the container
        item.appendChild(img)
        container.appendChild(item)
    })
}

async function getRandomPhoto() {
    try {
        const response = await fetch(apiUrl) 
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        console.log(error)
    }
}

getRandomPhoto()