// src/data/menuData.js

export const menuSections = [
  { id: 'starters', label: 'Starters' },
  { id: 'salads', label: 'Soups & Salads' },
  { id: 'pastas', label: 'Pastas & Bowls' },
  { id: 'plates', label: 'Large Plates' },
  { id: 'handhelds', label: 'Handhelds' },
  { id: 'kids', label: 'Kids' },
  { id: 'sides', label: 'Sides' }
];

export const menuData = {
  starters: [
    {
      name: 'Soup of the Day',
      price: 9,
      description: 'Ask your server for today’s chef selection.'
    },
    {
      name: 'Fried Chicken Steam Buns',
      price: 14,
      description: 'Spiced walnut pesto, arugula, pickled onion, sweet buttermilk sauce.'
    },
    {
      name: 'Brussels Sprouts',
      price: 10,
      description: 'Sweet cranberry, bacon, maple.'
    },
    {
      name: 'Fried Calamari',
      price: 16,
      description: 'Pickles, marinara, sriracha aioli.'
    },
    {
      name: 'Bacon Bourbon Mussels',
      price: 17,
      description: 'Jalapeño, garlic, shallots, maple, grilled baguette.'
    },
    {
      name: 'Chicken Wings',
      price: '13 / 22',
      description:
        '(5) 13 · (10) 22 · Chili, garlic, buffalo sauce, blue cheese, celery & cucumber ranch.'
    },
    {
      name: 'Buffalo Cauliflower',
      price: 13,
      description: 'Sour cream, shaved celery, blue cheese.'
    },
    {
      name: 'Sol House Nachos',
      price: 18,
      description: 'Tomatillo braised chicken, chorizo, black bean purée, queso, pico de gallo.'
    }
  ],
  salads: [
    {
      name: 'Sol House Salad',
      price: 13,
      description:
        'Spring mix, grape tomatoes, pickled red onion, goat cheese, apples, walnuts, balsamic vinaigrette.'
    },
    {
      name: 'Caesar Salad',
      price: 14,
      description: 'Romaine lettuce, shaved parmesan, croutons, house Caesar dressing.'
    },
    {
      name: 'Add Grilled Chicken',
      price: 7,
      description: 'Add grilled chicken to any salad.'
    },
    {
      name: 'Add Shrimp',
      price: 9,
      description: 'Add shrimp to any salad.'
    }
  ],
  pastas: [
    {
      name: 'Mac Crack',
      price: 19,
      description: 'Five cheeses, roasted tomato confit, toasted breadcrumbs.'
    },
    {
      name: 'Bolognese',
      price: 26,
      description: 'Pappardelle pasta, slow-simmered meat sauce, ricotta, basil.'
    },
    {
      name: 'Vodka Rigatoni',
      price: 22,
      description: 'Spicy vodka sauce, rigatoni, chives, parmesan.'
    },
    {
      name: 'Pad Thai',
      price: 26,
      description:
        'Hoisin, oyster sauce, sriracha, steak, shrimp, peanuts, bean sprouts, cilantro, rice noodles.'
    }
  ],
  plates: [
    {
      name: 'Hanger Steak',
      price: 35,
      description: '10oz steak, roasted fingerlings, green beans, bourbon peppercorn cream sauce.'
    },
    {
      name: 'Chicken Skewer',
      price: 28,
      description: 'Spiced chicken, basmati rice, masala sauce, naan.'
    },
    {
      name: 'Panko Parm Crusted Cod',
      price: 31,
      description: 'Dill crema, mashed potatoes, seasonal sautéed veggies.'
    }
  ],
  handhelds: [
    {
      name: 'The Classic Burger',
      price: 18,
      description: '½ pound burger, lettuce, tomato, onion, cheddar, pickles.'
    },
    {
      name: 'Sol House Burger',
      price: 20,
      description:
        '½ pound burger, fried jalapeño, sautéed onions, applewood smoked bacon, gouda, arugula, baconaisse.'
    },
    {
      name: 'Spicy Crispy Chicken',
      price: 18,
      description: 'Fried chicken, pickles, citrus slaw, spicy rémoulade.'
    },
    {
      name: 'Beyond Burger',
      price: 'MP',
      description: 'Plant-based patty available. GF bun +2 · Bacon +1.'
    }
  ],
  kids: [
    {
      name: 'Mac n Cheese',
      price: 9,
      description: 'Classic creamy mac n cheese.'
    },
    {
      name: 'Cheeseburger',
      price: 11,
      description: 'Served with fries & pickle.'
    },
    {
      name: 'Grilled Cheese',
      price: 11,
      description: 'Served with fries & pickle.'
    },
    {
      name: 'Chicken Finger Bites',
      price: 11,
      description: 'Served with fries & pickle.'
    }
  ],
  sides: [
    {
      name: 'Fries',
      price: 6,
      description: 'Crispy golden fries.'
    },
    {
      name: 'Sweet Potato Fries',
      price: 7,
      description: 'Sub with handhelds for +$1.50.'
    },
    {
      name: 'Onion Rings',
      price: 7,
      description: 'Crispy, beer-battered onion rings.'
    },
    {
      name: 'Side Salad',
      price: 7,
      description: 'Greens, tomato, onion, house dressing.'
    }
  ]
};
