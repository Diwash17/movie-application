const apiKey = '11a8f211';
const apiUrl = 'https://www.omdbapi.com/?t=';

const searchButton = document.querySelector(".fa-magnifying-glass");
const movieSearch = document.querySelector(".moviesearch");
const poster = document.querySelector(".movieposter");
const title = document.querySelector(".title");
const director = document.querySelector(".moviedirector2");
const imdb = document.querySelector(".movieimdb2");
const release = document.querySelector(".movierelease2");
const plot = document.querySelector(".plot");

document.addEventListener("DOMContentLoaded", () => {
  const defaultMovie = "The Batman";
  checkMovie(defaultMovie);
});

async function checkMovie(search) {
  try {
    const response = await fetch(apiUrl + `${search}` + `&apikey=${apiKey}`);
    const data = await response.json();
    console.log(data)
     if (data.Response === "False") {
      alert("Movie not found");
       return;
     }

    poster.innerHTML = `<img src=${data.Poster}>`;
    title.innerHTML = data.Title;
    director.innerHTML = data.Director;
    release.innerHTML = data.Released;
    plot.innerHTML = data.Plot;
    imdb.innerHTML = data.Ratings[0].Value;
  } catch (error) {
    alert(error);
  }
}

searchButton.addEventListener("click", () => {
  checkMovie(movieSearch.value);
});
window.onload=()=>{
  checkMovie("Batman")
}