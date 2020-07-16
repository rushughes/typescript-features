const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, boolean, number] = ['brown', true, 40];

type Drink = [string, boolean, number];

const coke: Drink = ['brown', true, 60];
const sprite: Drink = ['clear', true, 60];
const tea: Drink = ['brown', false, 0];
const coffee: Drink = ['black', false, 0];

// what do the numbers represent???
const carSpecs: [number, number] = [400, 3354];

// objects let us put in keys to make things more obvious
const carStats = {
  horsepower: 400,
  weight: 3354,
};
