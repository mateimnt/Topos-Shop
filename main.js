// Change start and end date of pad rental date form when refreshed
let startDateInput = document.getElementById("start-date");
let endDateInput = document.getElementById("end-date");
const currentDate = new Date();

function addStartDate() {
  
 
  console.log(startDateInput);

  const startDateString = currentDate.toISOString().split("T")[0];

  startDateInput.value = startDateString;
  startDateInput.min = startDateString;

  const endDate = new Date(currentDate);
  endDate.setDate(currentDate.getDate() + 5);
  const endDateString = endDate.toISOString().split("T")[0];

  endDateInput.value = endDateString;
  endDateInput.min = startDateString;

}


if(startDateInput !=null){
  addStartDate();
}

//end

// Make topo cards in home page

const toposArray = [
  {
    id: 1,
    pictureUrl: "assets/magic.jpg",
    title: "Magic Wood",
    text: "With amazing bouldering on swiss gneiss and stunning mountain scenery Magic Wood truly deserves its name.",
    buttonLink: "magic-wood.html"

  },
  {
    id: 2,
    pictureUrl: "assets/chironico.jpg",
    title: "Chironico",
    text: "Chironico is one of the most popular bouldering areas in Europe. In a rather compact area you can find more than 2000 boulder problems.",
    buttonLink: "chironico.html"
  },
  {
    id: 3,
    pictureUrl: "assets/albarracin.jpg",
    title: "Albarracin",
    text: "Albarracín, also known as the \"Spanish Fontainebleau\", is a sandstone bouldering paradise.",
    buttonLink: "albarracin.html"
  }
];

let htmlToposCode = ``;
let toposCardContainer = document.getElementById("topos-card-container");

function createTopoCard(topo){
  let cardDiv = document.createElement("div");
  cardDiv.className = "col-12 col-md-4";

  let flexboxCardDiv = document.createElement("div");
  flexboxCardDiv.className = "flexbox-card mx-2 my-1";

  let topoCardTopDiv = document.createElement("div");
  topoCardTopDiv.className = "topo-card-top";
  topoCardTopDiv.style.backgroundImage = `url(${topo.pictureUrl})`;

  let cardContentDiv = document.createElement("div");
  cardContentDiv.className = "card-content";

  let cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = topo.title;

  let cardText = document.createElement("p");
  cardText.className = "card-text pb-5 px-2";
  cardText.textContent = topo.text;

  let cardPrice = document.createElement("div");
  cardPrice.className = "card-price";

  let visitButton = document.createElement("a");
  visitButton.href = topo.buttonLink;
  visitButton.className = "custom-button";
  visitButton.textContent = "Visit";

  cardContentDiv.appendChild(cardTitle);
  cardContentDiv.appendChild(cardText);
  cardPrice.appendChild(visitButton);
  cardContentDiv.appendChild(cardPrice);

  flexboxCardDiv.appendChild(topoCardTopDiv);
  flexboxCardDiv.appendChild(cardContentDiv);

  cardDiv.appendChild(flexboxCardDiv);

  return cardDiv;
}


if(toposCardContainer !=null){
  toposArray.forEach(function (topo) {
    while (toposCardContainer.firstChild) {
      toposCardContainer.removeChild(toposCardContainer.firstChild);
    }
  
    toposArray.forEach(function (topo) {
      let topoCard = createTopoCard(topo); 
      toposCardContainer.appendChild(topoCard); 
    });
  })

}

//end

// Make pad cards in rent pads page
const rentPadsArray = [
  {
    id: 1,
    pictureUrl: "assets/la-sportiva.jpg",
    title: "La Sportiva",
    size: "Medium",
    price: "10 €"

  },
  {
    id: 2,
    pictureUrl: "assets/ocun.jpg",
    title: "Ocun",
    size: "Medium",
    price: "10 €"
  },
  {
    id: 3,
    pictureUrl: "assets/bd.jpg",
    title: "Black Diamond",
    size: "Small",
    price: "8 €"
  },
  {
    id: 4,
    pictureUrl: "assets/beal.jpg",
    title: "Black Diamond",
    size: "Small",
    price: "5 €"
  },
  {
    id: 5,
    pictureUrl: "assets/petzl.jpg",
    title: "Petzl",
    size: "Large",
    price: "12"
  },
  {
    id: 6,
    pictureUrl: "assets/ederild.jpg",
    title: "Ederild",
    size: "Large",
    price: "12 €"
  }
];

let htmlRentPadsCode = ``;
let padsCardContainer = document.getElementById("pads-card-container");


if(padsCardContainer !=null){


rentPadsArray.forEach(function(pad) {
  htmlRentPadsCode += `
    <div class="col-12 col-xl-4">
        <div class="flexbox-card mx-2 my-4">
            <div class="pad-card-top" style="background-image: url(${pad.pictureUrl})">
            </div>
            <div class="card-content">
                <h5 class="card-title">${pad.title}</h5>
                <p class=" card-text">${pad.size}</p>
                <p>${pad.price}</p>
                <a href="#" class="custom-button">Buy</a>
            </div>
        </div>
    </div>
  `
})


padsCardContainer.innerHTML = htmlRentPadsCode;

}
//end

// Change choose size button text with the chosen size

let sizeBtns = document.querySelectorAll(".dropdown-item");

if (padsCardContainer != null) {
sizeBtns.forEach(function(btn){
  btn.addEventListener("click", (e) => {
    let htmlRentPadsCode = "";
    rentPadsArray.forEach(function(pad) {
      if(btn.innerText == pad.size){
          htmlRentPadsCode += `
            <div class="col-12 col-xl-4">
                <div class="flexbox-card mx-2 my-4">
                    <div class="pad-card-top" style="background-image: url(${pad.pictureUrl})">
                    </div>
                    <div class="card-content">
                        <h5 class="card-title">${pad.title}</h5>
                        <p class=" card-text">${pad.size}</p>
                        <p>${pad.price}</p>
                        <a href="#" class="custom-button">Buy</a>
                    </div>
                </div>
            </div>
          `
      }
      
    })
    padsCardContainer.innerHTML = htmlRentPadsCode;
  })
})
}