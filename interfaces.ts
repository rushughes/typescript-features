interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const NewBeetle: Vehicle = {
  name: 'beetle',
  year: new Date(),
  broken: false,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle = (vehicle: {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);
printVehicle2(oldCivic);

interface Reportable {
  summary(): string;
}

const printVehicle3 = (vehicle: Reportable): void => {
  console.log(vehicle.summary());
};

printVehicle3(oldCivic);
printVehicle3(NewBeetle);
