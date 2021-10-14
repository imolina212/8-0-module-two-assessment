document.querySelector("#submitbtn").addEventListener("submit", (event) => {
  event.preventDefault();
  fetch("https://ghibliapi.herokuapp.com/films")
    .then((res) => {
      return res.json();
    })
    .then((films) => {
      console.log(films);

      let dropDown = document.querySelector("#dropdown");

      films.forEach((film) => {
        const option = document.createElement("option");
        option.setAttribute("value", film.name);
        option.textContent = film.name;
        dropDown.append(option);
      });
    });
});
