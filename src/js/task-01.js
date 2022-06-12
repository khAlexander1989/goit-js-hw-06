const itemEl = document.querySelectorAll('.item');

console.log('Number of categories: ', itemEl.length, '\n\n');
for (const item of itemEl) {
  console.log('Category: ', item.firstElementChild.textContent);
  console.log('Elements: ', item.lastElementChild.children.length, '\n\n');
}
