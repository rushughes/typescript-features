class Vehicle {
  public drive(): void {
    console.log('chugga chugga');
  }
  public honk(): void {
    console.log('beep beep');
  }
}

class Car extends Vehicle {
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

const vehicle = new Vehicle();
vehicle.honk();

const car = new Car();
car.startParkingProcess();
car.honk();
