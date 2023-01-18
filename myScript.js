// header color change

var header = document.querySelector(".header");
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changePara() {
  const names = [
    "See We're Made for each other cheeru😚🥹",
    "I love you so much🥲😚",
    "You're the best thing that has happened to me🥹",
    "Let's get married soon🥹❤️",
    "I wanna be with you always and forever Cheeru🥹",
  ];

  const random = Math.floor(Math.random() * names.length);
  let change = names[random];
  document.querySelector(".msg").textContent = change;
  console.log("hai this function");
}

function changeColor() {
  inputColor = getRandomColor();
  header.style.color = inputColor;
}
setInterval("changeColor()", 500);

// logic
var num = Math.floor(Math.random() * 100); // logic to produce random number form 0 to 100

function change() {
  const names = [
    "See We're Made for each other cheeru😚🥹",
    "I love you so much🥲😚",
    "You're the best thing that has happened to me🥹",
    "Let's get married soon🥹❤️",
    "I wanna be with you always and forever Cheeru🥹",
    "Let's be Together Forever babe😚",
    "I can't wait to spend my whole life with you!❤️",
    "I wanna hold your hand and travel the world with you Cheeru🥹😚",
  ];

  const random = Math.floor(Math.random() * names.length);
  let change = names[random];

  document.getElementById("btn1").addEventListener("click", changePara);

  const name_1 = document.querySelector("#name1").value;
  const name_2 = document.querySelector("#name2").value;
  if (name_1 == "" && name_2 == "") {
    alert("Enter the names");
  } else {
    if (
      name_1 == "Vignesh" ||
      name_1 == "vignesh" ||
      name_1 == "vicky" ||
      name_1 == "Vicky" ||
      name_1 == "Ahalya" ||
      name_1 == "ahalya" ||
      name_1 == "cheeru" ||
      name_1 == "Cheeru"
    ) {
      if (
        name_2 == "Vignesh" ||
        name_2 == "vignesh" ||
        name_2 == "vicky" ||
        name_2 == "Vicky" ||
        name_2 == "Ahalya" ||
        name_2 == "ahalya" ||
        name_2 == "cheeru" ||
        name_2 == "Cheeru"
      ) {
        const button = document.getElementById("btn1");
        button.style.display = "block";
        document.querySelector(".nameMale").textContent = name_1;
        document.querySelector(".nameFemale").textContent = name_2;
        header.textContent = "Love Calculator results ";
        document.querySelector(".num").textContent = "It's always 100%";
        document.querySelector(".msg").textContent = change;

        var con = document.querySelectorAll(".container");
        con[0].style.display = "none";
        con[1].style.display = "none";
        con[2].style.display = "none";
        con[3].style.display = "none";
      }else if(name_2 == "Vignesh" ||
      name_2 !== "vignesh" ||
      name_2 !== "vicky" ||
      name_2 !== "Vicky" ||
      name_2 !== "Ahalya" ||
      name_2 !== "ahalya" ||
      name_2 !== "cheeru" ||
      name_2 !== "Cheeru"){
        header.textContent = "Love Calculator results ";
      document.querySelector("#resulttext").textContent = "The result is:";
      document.querySelector(".num").textContent = "Not acceptable you are My Person!";
      var con = document.querySelectorAll(".container");
      con[0].style.display = "none";
      con[1].style.display = "none";
      con[2].style.display = "none";
      con[3].style.display = "none";
      }
    } else {
      header.textContent = "Love Calculator results ";
      document.querySelector("#resulttext").textContent = "The result is:";
      document.querySelector(".nameMale").textContent =
        document.querySelector("#name1").value;
      document.querySelector(".nameFemale").textContent =
        document.querySelector("#name2").value;
      document.querySelector(".num").textContent = num + "%";
      var con = document.querySelectorAll(".container");
      con[0].style.display = "none";
      con[1].style.display = "none";
      con[2].style.display = "none";
      con[3].style.display = "none";
      document.querySelector("p").textContent =
        "To calculate again refresh the page";
    }
  }
}

document.querySelector(".btn").addEventListener("click", change);
