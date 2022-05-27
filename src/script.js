const advice = document.querySelector(".text"),
id = document.querySelector(".id"),
dice = document.querySelector("button");

function loadQuote() {


  fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(result => {
      id.innerHTML = `Advice #${result.slip.id}`;
      advice.innerHTML = `\"${result.slip.advice}\"`;
    });
}

dice.addEventListener("click", loadQuote);
