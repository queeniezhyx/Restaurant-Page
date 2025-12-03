class Dish {
    constructor(name, price, description, img){
        this.name = name;
        this.price = price;
        this.description = description;
        this.img = img;
    }
}

export const menu = [
  new Dish(
    "Margherita Pizza",
    10,
    "Classic pizza with tomato sauce, mozzarella, and fresh basil.",
    "pizza.jpeg"
  ),
  new Dish(
    "Pasta Carbonara",
    12,
    "Creamy pasta with pancetta, egg, parmesan, and black pepper.",
    "carbonara.jpeg"
  ),
  new Dish(
    "Caesar Salad",
    8,
    "Crisp romaine lettuce, croutons, parmesan, and Caesar dressing.",
    "caesar-salad.jpeg"
  ),
  new Dish(
    "Grilled Salmon",
    15,
    "Perfectly grilled salmon with lemon butter sauce and seasonal veggies.",
    "grilled-salmon.jpeg"
  ),
  new Dish(
    "Tiramisu",
    6,
    "Coffee-soaked ladyfingers layered with mascarpone cream and cocoa.",
    "tiramisu.jpeg"
  ),
];
