const ingredientsList = document.querySelector('#ingredients');
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItem = ingredients.map(ingredient => {
  const ingredientItem = document.createElement('li');
    ingredientItem.textContent = ingredient;
    ingredientItem.className = 'item';
  return ingredientItem;
});

ingredientsList.append(...ingredientsItem);