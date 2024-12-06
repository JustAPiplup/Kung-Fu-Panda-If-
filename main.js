// KF Panda Search

// HTML Variables
let charNameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value.toLowerCase();

  //   If Statement - Test the Input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    charNameEl.innerHTML = "Po";
    charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior!";
    document.getElementById("char-img").src = "img/po.png";
  } else if (name === "tigress" || name === "master tigress") {
    charNameEl.innerHTML = "Tigress";
    charQuoteEl.innerHTML = "That was hardcore!";
    document.getElementById("char-img").src = "img/tigress.png";
  } else if (name === "mantis" || name === "master mantis") {
    charNameEl.innerHTML = "Mantis";
    charQuoteEl.innerHTML = "Fear the Bug!";
    document.getElementById("char-img").src = "img/mantis.png";
  } else if (name === "monkey" || name === "master monkey") {
    charNameEl.innerHTML = "Monkey";
    charQuoteEl.innerHTML = "We Should Hang Out!";
    document.getElementById("char-img").src = "img/monkey.png";
  } else if (name === "viper" || name === "master viper") {
    charNameEl.innerHTML = "Viper";
    charQuoteEl.innerHTML = "I don't need to bite to fight!";
    document.getElementById("char-img").src = "img/viper.png";
  } else if (name === "crane" || name === "master crane") {
    charNameEl.innerHTML = "Crane";
    charQuoteEl.innerHTML = "Wings of Justice— KA-KAW!";
    document.getElementById("char-img").src = "img/crane.png";
  } else if (name === "boss wolf" || name === "wolf leader") {
    charNameEl.innerHTML = "Boss Wolf";
    charQuoteEl.innerHTML =
      "Guess nobody told you: If you mess with the wolf, you get the fangs!";
    document.getElementById("char-img").src = "img/boss-wolf.png";
  } else if (name === "kai" || name === "general kai") {
    charNameEl.innerHTML = "Gereral Kai";
    charQuoteEl.innerHTML =
      "The Master of Pain. Beast of Vengeance. Maker of Widows!";
    document.getElementById("char-img").src = "img/kai.png";
  } else if (name === "croc" || name === "master croc") {
    charNameEl.innerHTML = "Master Croc";
    charQuoteEl.innerHTML = "The only hero in this town is a dead one!";
    document.getElementById("char-img").src = "img/croc.png";
  } else if (name === "mr ping" || name === "mr. ping" || name === "po dad") {
    charNameEl.innerHTML = "Mr. Ping";
    charQuoteEl.innerHTML =
      "To make something special, you just have to believe it's special.";
    document.getElementById("char-img").src = "img/mr-ping.png";
  } else if (
    name === "oogway" ||
    name === "master oogway" ||
    name === "grand master oogway"
  ) {
    charNameEl.innerHTML = "Master Oogway";
    charQuoteEl.innerHTML =
      "Your mind is like this water, my friend. When it is agitated, it becomes difficult to see. But if you allow it to settle, the answer becomes clear.";
    document.getElementById("char-img").src = "img/oogway.png";
  } else if (name === "shen" || name === "lord shen") {
    charNameEl.innerHTML = "Lord Shen";
    charQuoteEl.innerHTML = "Nothing stands in my way!";
    document.getElementById("char-img").src = "img/shen.png";
  } else if (name === "master shifu" || name === "shifu") {
    charNameEl.innerHTML = "Master Shifu";
    charQuoteEl.innerHTML = "If you are truly at peace, you can do anything.";
    document.getElementById("char-img").src = "img/shifu.png";
  } else if (name === "soothsayer") {
    charNameEl.innerHTML = "Soothsayer";
    charQuoteEl.innerHTML =
      "Your story may not have such a happy beginning, but that doesn't make you who you are. It is the rest of your story, who you choose to be.";
    document.getElementById("char-img").src = "img/soothsayer.png";
  } else if (name === "tai lung") {
    charNameEl.innerHTML = "Tai Lung";
    charQuoteEl.innerHTML =
      "So that is his name: Po... Finally, a worthy opponent! Our battle will be legendary!";
    document.getElementById("char-img").src = "img/tai-lung.png";
  } else if (
    name === "storming ox" ||
    name === "master storming ox" ||
    name === "ox"
  ) {
    charNameEl.innerHTML = "Master Storming Ox";
    charQuoteEl.innerHTML = "It's time to surrender, panda. Kung fu is dead.";
    document.getElementById("char-img").src = "img/storming-ox.png";
  } else {
    document.getElementById("char-name").innerHTML = "?????";
    document.getElementById("char-quote").innerHTML = "----------";
    document.getElementById("char-img").src = "img/question-mark.png";
  }
}

document.getElementById("theme-btn").addEventListener("click", themeButton);

function themeButton() {
  let theme = document.getElementById("theme-in").value.toLowerCase();

  if (theme === "dark" || theme === "black") {
    document.getElementById("the-body").style.backgroundColor =
      "rgba(0, 0, 0, 0.7)";
    document.getElementById("the-body").style.color = "rgba(255, 255, 255)";
  } else if (theme === "light" || theme === "white") {
    document.getElementById("the-body").style.backgroundColor =
      "rgba(255, 255, 255, 0.7)";
    document.getElementById("the-body").style.color = "rgba(0, 0, 0)";
  }
}
