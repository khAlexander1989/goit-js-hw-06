const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');
const ingredientsItem = [];

for (const idx in ingredients) {
  ingredientsItem[idx] = document.createElement('li');
  ingredientsItem[idx].append(document.createTextNode(ingredients[idx]));
  ingredientsItem[idx].classList.add('item');
}

ingredientsEl.append(...ingredientsItem);
