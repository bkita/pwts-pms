// PODSTAWOWE TYPY DANYCH W TYPESCRIPT
// 1. Liczby (number)
let age: number = 30;
let temperature: number = 36.6;
console.log('Wiek:', age);
console.log('Temperatura:', temperature);

// 2. Łańcuchy znaków (string)
let firstName: string = 'Jan';
let lastName: string = 'Kowalski';
console.log('Imię:', firstName);
console.log('Nazwisko:', lastName);

// 3. Wartości logiczne (boolean)
let isLoggedIn: boolean = true;
let hasSubscription: boolean = false;

// KLASA - forma dla obiektu

class Computer {
  // WŁAŚCIWOŚCI
  brand: string;
  model: string;
  ramSizeGB: number = 16;
  powerStatus: boolean = false;

  // KONSTRUKTOR
  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  // METODY
  public powerOn(): void {
    this.powerStatus = true;
    console.log(`${this.brand} ${this.model} is now ON.`);
  }

  public powerOff(): void {
    this.powerStatus = false;
    console.log(`${this.brand} ${this.model} is now OFF.`);
  }

  public getSpecs(): string {
    return `Brand: ${this.brand}, Model: ${this.model}, RAM: ${this.ramSizeGB}GB`;
  }

  public upgradeRAM(additionalRAM: number): void {
    this.ramSizeGB += additionalRAM;
    console.log(`${this.brand} ${this.model} RAM upgraded to ${this.ramSizeGB}GB.`);
  }
}

// TWORZENIE OBIEKTU NA PODSTAWIE KLASY
const apple1 = new Computer('Apple', 'MacBook Pro');
const apple2 = new Computer('Dell', 'XPS 13');

console.log(apple1.getSpecs());
console.log(apple2.getSpecs());
