function sayHi(): string {
  return 'Hello World';
}

function telNumber(): number {
  return 37477000222;
}

function showMessage(): void {
  console.log('We are not returning anything');
}

function showNumbers(): Array<number> {
  return [1,2,3];
}

function showMixedValues(): any[] { //Array<any>
  return [2, 'test', true];
}

function sumValues(a: number, b: number, c?: number): number {
  return c ? (a + b) * c : (a + b);
}

sumValues(5, 10, 2);