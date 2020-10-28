interface Male {
  name: string,
  surname?: string,
  age: number,
  readonly nickname?: string
}

const Max: Male = {
  name: 'Max',
  age: 27
}
Max.age = 28;

const John: Male = {
  name: 'John',
  surname: 'Doe',
  age: 32
}

const otherSyntax = {} as Male;
const otherSyntax2 = <Male>{};

//inheritance

interface Car {
  brand: string,
  date: number
}

interface Audi extends Car {
  model: string,
  isWorking: boolean,
  turnOn: () => void,
  engine?: number
}

const MyCar: Audi = {
  brand: 'Audi',
  date: 2018,
  model: 'A4',
  engine: 2.0,
  isWorking: false,
  turnOn() {
    this.isWorking = true
  },
}

console.log(MyCar.isWorking);
MyCar.turnOn();
console.log(MyCar.isWorking);

type primitive = number | string;

interface cssStyles {
  [key: string]: primitive
}

const styles: cssStyles = {
  border: '1px',
  color: '#000',
  width: 50,
  height: 50
}