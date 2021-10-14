fetch("https://ghibliapi.herokuapp.com/films")
  .then((res) => res.json())
  .then((films) => {
    console.log(films);

    const dropDown = document.querySelector("#dropdown");

    for (let film of films) {
      const option = document.createElement("option");
      option.textContent = film.title;
      option.setAttribute("value", film.title);
      dropDown.append(option);
    }

    let displayInfo = document.querySelector("#display-info");
    //add li's
    dropDown.addEventListener("change", () => {
      for (let film of films) {
        let releasedDate = film.released_date;
        let filmDescription = film.description;

        if (dropDown.value === film.title) {
          console.log(film.title);
          displayInfo.innerHTML = `<h3>${film.title}</h3>
            <p id="releasedDate">${releasedDate}</p>
            <p id="film-description">${filmDescription}</p>`;
        }
      }

      //Review section
      let ul = document.querySelector("#reviewlist");

      document.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault();
        const li = document.createElement("li");
        li.innerHTML = `<strong>${filmheader.value}</strong>`;
        //   li.textContent = `${event.target.input.value}`;
        ul.append(li);
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });
