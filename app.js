document.addEventListener('DOMContentLoaded',()=>{
  const cardArray = [
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
  ];
  
  cardArray.sort(() => 0.5 - Math.random());
  
  const grid = document.querySelector("#grid");
  const result = document.querySelector("#result");
  let cardschosen = [];
  let cardschosenId = [];
  const cardswon = [];
  
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }
   function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardschosen.push(cardArray[cardId].name);
    cardschosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardschosen.length === 2) {
      setTimeout(checkmatch, 500);
    }
  }
  createBoard();
  function checkmatch() {
    let cards = document.querySelectorAll("img");
    if (cardschosenId[0] == cardschosenId[1]) {
      cards[cardschosenId[0]].setAttribute("src", "images/blank.png");
      cards[cardschosenId[1]].setAttribute("src", "images/blank.png");
      alert("You Have clicked the same image!");
    } else if (cardschosen[0] === cardschosen[1]) {
      alert("You Founda Match");
  
      cards[cardschosenId[0]].setAttribute("src", "images/white.png");
      cards[cardschosenId[1]].setAttribute("src", "images/white.png");
      cards[cardschosenId[0]].removeEventListener("click", flipCard);
      cards[cardschosenId[1]].removeEventListener("click", flipCard);
      cardswon.push(cardschosen);
    } else {
      cards[cardschosenId[0]].setAttribute("src", "images/blank.png");
      cards[cardschosenId[1]].setAttribute("src", "images/blank.png");
      alert("Sorry Try Again");
    }
    cardschosen = [];
    cardschosenId = [];
    console.log(cardswon.length)
    result.textContent = cardswon.length;

    if (cardswon.length === cardArray.length / 2) {
      result.textContent = "Congratulations You Found Them All";
    }
  }
  
  
})
