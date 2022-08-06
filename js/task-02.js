const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

const ingredientsSet = createIngredientsSet(ingredients);

ingredientsEl.append(...ingredientsSet);

// -----------------FUNCTIONS-----------------

function createIngredient(ingredient) {
  const item = document.createElement('li');
  item.appendChild(document.createTextNode(ingredient));
  item.classList.add('item');

  return item;
}

function createIngredientsSet(ingredients) {
  return ingredients.map(createIngredient);
}
