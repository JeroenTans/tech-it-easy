// VOORRAAD ARRAY MET TV'S

const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

//1a hoeveel tv's
const remainingTv = inventory.map((stock)=>{
  return stock.originalStock - stock.sold;
});

//1a hoeveel tv's
function availableForSale (array) {
  let total = 0;
  array.map((item) => {
    total += item;
  })
  return total;
}

//2a tv type en naam
const tvNamesAndTypes = inventory.map((stock)=>{
  let tvName = stock.name;
  let tvType = stock.type;
  return "Tv name: " + tvName + " | " + "Tv type: " + tvType;
});

//2a tv type en naam
const tvType = inventory.map((stock)=>{
  return stock.type;
});

//2b Verkochte tv's
const soldOutTv = inventory.filter((tv)=>{
  const soldOutTvArray = tv.sold === tv.originalStock;
  if (soldOutTvArray) return true;
})

//2b verkochte tv's
function soldOutTvObject (soldOutTvOne) {
  if (soldOutTv) return soldOutTvOne;
}

//2c Ambilight tv's
const ambiTvs = inventory.filter((stock)=>{
  const ambi = stock.options.ambiLight;
  if (ambi) return true;
})

//2c Ambilight tv's
function hasTvAmbi (ambi) {
  if (ambiTvs)return ambi;
}

//2d van hoog naar laag
const sortByPrice = inventory.sort((a, b) => a.price - b.price );

//3a Totale opbrengst
const tvWorth = inventory.map((stock)=>{
  return stock.originalStock * stock.price;
});

//3a Totale opbrengst
function allTvWorth (array){
  let total = 0;
  array.map((item)=>{
    total += item;
  });
  return total;
};

//3b Totaal verdiend
const howManyTvSoldPrice = inventory.map((stock)=>{
  return stock.sold * stock.price;
});

//3b Totaal verdiend
function totalAmountOfSoldTv (array) {
  let total = 0;
  array.map((item)=>{
    total += item;
  });
  return total;
}

//5a Functie voor de weegave van 2 tv types
function tvDetailNameAndType (array, indexNumber) {
  return array[indexNumber].brand + " " + array[indexNumber].type + " - " + array[indexNumber].name
}

//5b Euro teken en ,- bij de prijs zetten
function changePriceWithChar (array, indexNumber) {
  return "€" + array[indexNumber].price + ",-";
}

//5c van inch naar cm

function inchToCm (array) {
  const availableSizes = array.availableSizes.map((sizes) => {
    return "inch: " + sizes + " cm: " + (sizes * 2.5);
  })
  return availableSizes.join(" | ")
}


const container = document.getElementById('warning');
container.textContent = availableForSale(remainingTv);
const containerTwo = document.getElementById('totalAmount');
containerTwo.textContent = allTvWorth(tvWorth);
const containerThree = document.getElementById('totalSold');
containerThree.textContent = totalAmountOfSoldTv(howManyTvSoldPrice);
const containerFour = document.getElementById('tvOne');
containerFour.textContent = inventory[0].name + inventory[0].type;
const containerFive = document.getElementById('tvTwo');
containerFive.textContent = inventory[1].name + inventory[0].type;
const containerSix = document.getElementById('tvThree');
containerSix.textContent = tvDetailNameAndType(inventory, 0);
const containerSeven = document.getElementById('tvFour');
containerSeven.textContent = tvDetailNameAndType(inventory, 1);
const containerEight = document.getElementById('tvThreePrice');
containerEight.textContent = changePriceWithChar(inventory, 0);
const containerNine = document.getElementById('tvFourPrice');
containerNine.textContent = changePriceWithChar(inventory, 1);
const containerTen = document.getElementById('inchTvThree');
containerTen.textContent = inchToCm(inventory[0])
const containerEleven = document.getElementById('inchTvFour');
containerEleven.textContent = inchToCm(inventory[1])

console.log(availableForSale(remainingTv));
console.log(remainingTv);
console.log(tvNamesAndTypes);
console.log(soldOutTv);
console.log(ambiTvs);
console.log(sortByPrice);
console.log("De totale waarde van de verkochte tv's: €" + allTvWorth(tvWorth));


