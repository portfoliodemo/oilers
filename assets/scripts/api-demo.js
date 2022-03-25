
const request = new XMLHttpRequest();

request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=3XLw8d088K8GYMa9WCHuk8q6iopPVZ4e&tag=edmonton+oilers');

request.onload = () => {
    const response = request.response;
    const parsedData = JSON.parse(response);
    console.log(parsedData);
    const originalUrl = parsedData.data.images.original.url;
    console.log(originalUrl);

    const main = document.querySelector('.main');
    const gif = document.createElement('img');
    gif.setAttribute('src', originalUrl);
    main.appendChild(gif);
};

request.send();