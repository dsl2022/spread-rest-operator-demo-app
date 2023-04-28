// get the elements we need from the DOM
const fruitInput = document.getElementById('fruit-input');
const addFruitBtn = document.getElementById('add-fruit-btn');
const fruitsList = document.getElementById('fruits-list');

// define an array of fruits
let fruits = ['apple', 'banana', 'orange', 'kiwi'];

// update the fruits list
function updateFruitsList() {
	// clear the current list
	fruitsList.innerHTML = '';

	// loop through the fruits array and add each fruit to the list
	for (const fruit of fruits) {
		const li = document.createElement('li');
		li.textContent = fruit;
		fruitsList.appendChild(li);
	}
}

// update the fruits list when the page loads
updateFruitsList();

// add a new fruit to the array and update the list
function addFruit() {
	const newFruit = fruitInput.value.trim();

	// only add the new fruit if it's not empty and not already in the array
	if (newFruit !== '' && !fruits.includes(newFruit)) {
		fruits = [...fruits, newFruit];
		updateFruitsList();
	}

	// clear the input field
	fruitInput.value = '';
}

// add a fruit when the button is clicked
addFruitBtn.addEventListener('click', addFruit);

// add a fruit when the 'Enter' key is pressed in the input field
fruitInput.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		addFruit();
	}
});
