const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

const ingredientsItem = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.appendChild(document.createTextNode(ingredient));
  item.classList.add('item');

  return item;
});

ingredientsEl.append(...ingredientsItem);
