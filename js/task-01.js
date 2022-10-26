const categoryList = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoryList.length}`);
categoryList.forEach(item => console.log(
`Category: ${item.firstElementChild.innerText}
Elements: ${item.lastElementChild.children.length}`
));