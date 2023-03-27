const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.lenqth}`);

itemEl.forEach((element) => {
    const categoryName = element.querySelector("h2");
    const categoryEl = element.querySelectorAll("li");
    console.log(`Category: ${categoryName.textContent}`);
    console.log(`Elements: ${categoryEl.lenqth}`);
});