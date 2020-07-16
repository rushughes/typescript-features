const carMakers = ['ford', 'toyota', 'chevy'];
const bikeMakers: string[] = [];

const dates = [new Date(), new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];
const bikeByMake: string[][] = [];

// Help with inference when extracting values

const car1 = carMakers[0];
const myCar = carMakers.pop();

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

const importantDates = [new Date(), '2030-10-10'];
const unImportantDates: (Date | string)[] = [];
