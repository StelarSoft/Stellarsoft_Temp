// grab everything we need
const photoquantityInput = document.querySelector('[name=photoquantity]');
const videoquantityInput = document.querySelector('[name=videoquantity]');
const photototal = document.querySelector('.photototal');
const photoquantityLabel = document.querySelector('.photoquantity-label');
const videoquantityLabel = document.querySelector('.videoquantity-label');

// create functions we'll need

function calculatePhotoCost() {
  const photoquantity = photoquantityInput.value;
  const videoquantity = videoquantityInput.value;
  const cost = (photoquantity*200) + (videoquantity*500);
  console.log(cost);
  photototal.innerText = "TTD$" + cost.toFixed(2);
}

function updatePhotoQuantityLabel() {
  const photoquantity = photoquantityInput.value;
  photoquantityLabel.innerText = photoquantity;
}

function updateVideoQuantityLabel() {
  const videoquantity = videoquantityInput.value;
  videoquantityLabel.innerText = videoquantity;
}


// on first run
calculatePhotoCost()

// add event listeners
photoquantityInput.addEventListener('input', calculatePhotoCost);
videoquantityInput.addEventListener('input', calculatePhotoCost);
photoquantityInput.addEventListener('input', updatePhotoQuantityLabel);
videoquantityInput.addEventListener('input', updateVideoQuantityLabel);

