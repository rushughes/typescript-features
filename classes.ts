class Vehicle {
  constructor(public color: string) {}

  public drive(): void {
    console.log('chugga chugga');
  }
  public honk(): void {
    console.log('beep beep');
  }
}

class Car extends Vehicle {
  constructor(color: string, public wheels: number) {
    super(color);
  }

  public drive(): void {
    console.log('vroom');
  }

  private park(): void {
    console.log('parking');
  }

  public startParkingProcess(): void {
    this.park();
  }

  protected stop(): void {
    console.log('stopping');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
vehicle.honk();

const car = new Car('red', 4);
console.log(car.color);
car.startParkingProcess();
car.honk();
