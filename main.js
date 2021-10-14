fetch("https://ghibliapi.herokuapp.com/films")
  .then((res) => res.json())
  .then((films) => {
    // console.log(films);

    let dropDown = document.querySelector("#dropdown");

    for (let film of films) {
      const option = document.createElement("option");
      option.textContent = film.title;
      option.setAttribute("value", film.title);
      dropDown.append(option);
    }

    let dropDown2 = document.querySelector("#dropdown");
    let displayInfo = document.querySelector("#display-info");

    dropDown2.addEventListener("change", () => {
      for (let film of films) {
        let releasedDate = film.release_date;
        let filmDescription = film.description;

        if (dropDown2.value === film.title) {
          //   console.log(film.title);
          displayInfo.innerHTML = `<h3>${film.title}</h3>
            <p id="releasedDate">${releasedDate}</p>
            <p id="film-description">${filmDescription}</p>`;
        }
      }

      //Review section
      let reviewList = document.querySelector("#reviewList");

      let form = document.querySelector("#form");

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        let userInput = document.querySelector("#userInput");
        let filmHeader = document.querySelector("#display-info h3");

        let li = document.createElement("li");
        li.innerHTML = `<strong>${filmHeader.textContent}: </strong>${userInput.value}`;
        reviewList.append(li);

        if (li !== undefined) {
          userInput.value = "";
        }
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });
