function render(response) {
  console.log(response);
  let html;
  if (response.code == "404") {
    console.log(response.message);
    html = `<h2>Error</h2>
              <p>${response.message}</p>`;
  } else {
    html = `<h2>Enjoy This Dog Photo of the Breed of Your Choosing</h2>
              <img src="${response.message}" alt="dog photo">`;
  }
  $("section").html(html);
}

function handleForm() {
  $("form").submit(function (e) {
    e.preventDefault();

    const dogBreed = $("#dogBreed").val();

    fetch("https://dog.ceo/api/breed/" + dogBreed + "/images/random")
      .then((Response) => Response.json())
      .then((ResponseJson) => render(ResponseJson))
      .catch((error) => console.log(error));
  });
}

$(handleForm());
