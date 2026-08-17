// src/data/menuData.js

// ─── Main Menu ───────────────────────────────────────────────────────────────

export const menuSections = [
  { id: 'appetizers',  label: 'Appetizers' },
  { id: 'salads',    label: 'Salads' },
  { id: 'pastas',    label: 'Pastas' },
  { id: 'plates',    label: 'Large Plates' },
  { id: 'handhelds', label: 'Handhelds' },
];

export const menuData = {
  appetizers: [
    {
      name: 'Soup of the Day',
      price: 9,
      description: "Ask your server for today's chef selection.",
    },
    {
      name: 'Fried Chicken Steam Buns',
      price: 15,
      description: 'Spiced walnut pesto, arugula, pickled onion, sweet buttermilk sauce.',
    },
    {
      name: 'Brussels Sprouts',
      price: 11,
      description: 'Golden raisins, bacon, maple.',
    },
    {
      name: 'Duck Confit Poutine',
      price: 18,
      description: 'Tallow fries, rich duck gravy, shredded duck, cheese curds, scallions.',
    },
    {
      name: 'Bacon Bourbon Mussels',
      price: 18,
      description: 'Jalapeño, garlic, shallots, maple, grilled baguette.',
    },
    {
      name: 'Chicken Wings',
      price: '(5) $13 / (10) $22',
      description: 'Chili, garlic, buffalo sauce, blue cheese, celery & cucumber ranch.',
    },
    {
      name: 'Steak Toast',
      price: 18,
      description: 'Horseradish crema, arugula, pickled onion, sauce au poivre.',
    },
    {
      name: 'Sol House Nachos',
      price: 18,
      description: 'Tomatillo braised chicken, chorizo, black bean puree, queso, pico de gallo.',
    },
    {
      name: 'Street Corn Dip',
      price: 16,
      description: 'Fresh corn, cotija cheese, cilantro, served with corn tortilla chips',
    },
  ],

  salads: [
    {
      name: 'Sol House Salad',
      price: 14,
      description:
        'Spring mix, grape tomatoes, pickled red onion, goat cheese, apples, walnuts, balsamic vinaigrette.',
    },
    {
      name: 'Caesar Salad',
      price: 14,
      description: 'Romaine lettuce, shaved parmesan, croutons.',
    },
    {
      name: 'Beet Salad',
      price: 15,
      description: 'Labneh, blood orange, honey, pistachio, orange zest.',
    },
  ],

  pastas: [
    {
      name: 'Mac Crack',
      price: 19,
      description: 'Five cheeses, roasted tomato confit, breadcrumbs.',
    },
    {
      name: 'Bolognese',
      price: 26,
      description: 'Potato gnocchi, ricotta, parmesan',
    },
    {
      name: 'Vodka Rigatoni',
      price: 22,
      description: 'Spicy vodka sauce, rigatoni, chives, parmesan.',
    },
    {
      name: 'Pad Thai',
      price: 26,
      description:
        'Hoisin, oyster sauce, sriracha, steak, shrimp, peanuts, bean sprouts, cilantro, rice noodles.',
    },
  ],

  plates: [
    {
      name: 'Chicken Skewers',
      price: 28,
      description: 'Spiced chicken, basmati rice, masala sauce, naan.',
    },
    {
      name: 'Panko Parm Crusted Cod',
      price: 33,
      description: 'Dill crema, mashed potatoes, seasonal sauteed veggies.',
    },
    {
      name: 'Hanger Steak',
      price: 38,
      description: '10oz steak, roasted fingerlings, green beans, bourbon peppercorn cream sauce.',
      cookedToOrder: true,
    },
  ],

  handhelds: [
    {
      name: 'The Classic',
      price: 19,
      description: '1/2 pound burger, lettuce, tomato, onion, cheddar, pickles.',
      note: 'Beyond burger available · GF bun +$2 · Bacon +$1',
      cookedToOrder: true,
    },
    {
      name: 'Sol House Burger',
      price: 21,
      description:
        '1/2 pound burger, fried jalapeno, sauteed onions, applewood smoked bacon, gouda, arugula, baconnaise.',
      cookedToOrder: true,
    },
    {
      name: 'Spicy Crispy Chicken',
      price: 19,
      description: 'Fried chicken, pickles, citrus slaw, spicy remoulade.',
    },
    {
      name: 'Fish Tacos',
      price: 25,
      description: '3 piece, slaw, pico de gallo, sriracha aioli, sofrito rice, side salad.',
    },
    {
      name: 'Carne Asada Tacos',
      price: 24,
      description: '3 piece, salsa roja, avocado crema, onion, cilantro, sofrito rice, side salad',
    },
  ],
};

// ─── Sunday Brunch Menu ───────────────────────────────────────────────────────

// export const brunchSections = [
//   { id: 'brunch_starters',  label: 'Starters' },
//   { id: 'brunch_crepes',    label: 'Crepes' },
//   { id: 'brunch_eggs',      label: 'Eggs & More' },
//   { id: 'brunch_handhelds', label: 'Handhelds' },
//   { id: 'brunch_omelette',  label: 'Build Your Own Omelette' },
// ];

// export const brunchData = {
//   brunch_starters: [
//     { name: 'Soup of the Day', price: 9 },
//     { name: 'Pastry Sampler',  price: 15, description: 'Mini assorted pastries.' },
//     {
//       name: 'Sol House Salad',
//       price: 14,
//       description:
//         'Spring mix, grape tomatoes, pickled red onion, goat cheese, apples, walnuts, balsamic vinaigrette.',
//     },
//     {
//       name: 'Caesar Salad',
//       price: 14,
//       description: 'Romaine lettuce, shaved parmesan, croutons.',
//     },
//     {
//       name: 'Beet Salad',
//       price: 15,
//       description: 'Labneh, blood orange, pistachios, drizzled honey, orange zest.',
//     },
//     {
//       name: 'Bacon Bourbon Mussels',
//       price: 18,
//       description: 'Jalapeno, garlic, shallots, maple, grilled baguette.',
//     },
//   ],

//   brunch_crepes: [
//     {
//       name: 'Triple Berry',
//       price: 14,
//       description: 'Cream cheese, sauteed berries, whipped cream, berry compote.',
//     },
//     {
//       name: 'Nutella Crepe',
//       price: 14,
//       description: 'Fresh strawberries, bananas, topped with whipped cream.',
//     },
//     {
//       name: 'Wild Mushroom Crepe',
//       price: 16,
//       description: 'Spinach, chicken, mushroom, parmesan, lemon cream sauce, side salad.',
//     },
//   ],

//   brunch_eggs: [
//     {
//       name: 'Eggs Benedict',
//       price: 14,
//       description:
//         '2 poached eggs on an English muffin with Canadian bacon, topped with hollandaise sauce & served with home fries.',
//     },
//     {
//       name: 'Brussels Skillet',
//       price: 17,
//       description:
//         '2 eggs over medium, home fries, onions, lardons, avocado, maple aioli, chives.',
//     },
//     {
//       name: 'Biscuits & Gravy',
//       price: 17,
//       description:
//         '2 eggs your way over biscuits, homemade sausage gravy, served with home fries.',
//     },
//     {
//       name: 'Yogurt Parfait',
//       price: 12,
//       description:
//         'Vanilla yogurt, granola, shredded coconut, chia, strawberries, drizzled honey.',
//     },
//     {
//       name: '2 Eggs Your Way with Sourdough Toast',
//       price: 8,
//       description: [
//         'Add home fries +$2',
//         'Add choice of meat +$3  (Bacon | Sausage | Ham)',
//       ],
//     },
//   ],

//   brunch_handhelds: [
//     {
//       name: 'Sol House Bacon Egg & Cheese',
//       price: 12,
//       description: '2 eggs, pepper jelly, arugula, avocado, cheddar, brioche bun.',
//     },
//     {
//       name: 'Brunch Burger',
//       price: 20,
//       description:
//         '1/2 pound burger, egg, bacon, cheddar, lettuce, tomato, onion & served with french fries.',
//     },
//     {
//       name: 'Fish & Chips',
//       price: 21,
//       description: 'Tallow-fried cod, french fries, housemade coleslaw, tartar sauce.',
//     },
//     {
//       name: 'Spicy Crispy Chicken',
//       price: 18,
//       description:
//         'Fried chicken, pickles, citrus slaw, spicy remoulade sauce & served with fries.',
//     },
//   ],

//   brunch_omelette: [
//     {
//       name: 'Build Your Own Omelette (3 Eggs)',
//       price: 14,
//       description:
//         'All omelettes served with sourdough & home fries. Up to 3 toppings included. Each additional topping +$1.50.',
//       toppings: [
//         'Raw Onion', 'Ham',
//         'Caramelized Onion', 'Sausage',
//         'Bacon', 'Spinach',
//         'Cheddar', 'Mushroom',
//         'Gouda', 'Tomatoes',
//         'Goat Cheese', 'Jalapeno',
//         'American',
//       ],
//     },
//   ],
// };