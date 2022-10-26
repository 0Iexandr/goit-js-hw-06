const ingredientsList = document.querySelector('#ingredients');
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(ingredient => {
  const ingredientItem = document.createElement('li');
  
  ingredientItem.innerText = ingredient;
  ingredientItem.className = 'item';

  ingredientsList.appendChild(ingredientItem);
});