//Api Unsplash
const apiKey = 'ohTyNO9Ul5jlwxaueNJJLnIG8YWJ4UDUUkZH1oWo3y0';
const countResult = 10;
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${countResult}`;

async function getRandomPhoto() {
    try {
        const response = await fetch(apiUrl) 
        const data = await response.json();
    } catch (error) {
        console.log(error)
    }
}

getRandomPhoto()