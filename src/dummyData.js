const names = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple"];
const categories = ["Fruit", "Food", "Snack", "Drink"];

 export const data = Array.from({ length: 10000 }, (_, i) => ({
  id: i + 1,
  name: names[Math.floor(Math.random() * names.length)],
  category: categories[Math.floor(Math.random() * categories.length)],
  price: Math.floor(Math.random() * 500) + 1
}));

