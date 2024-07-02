import { Component, input } from '@angular/core';

@Component({
  selector: 'app-feladat',
  templateUrl: './feladat.component.html',
  styleUrl: './feladat.component.css'
})
export class FeladatComponent {
  currentInput: string = "0";
  results: string[] = [];
  message: string = "";

  performCheck(): void {
    let isPrime: boolean = this.isPrime(Number(this.currentInput));
    this.message = `A(z) ${this.currentInput}${isPrime ? "" : " NEM"} prím`;
    this.results.push(this.message);
  }

  isPrime(inputNumber: number): boolean {
    if (inputNumber < 0) {
      throw new Error("Parameter must be positive");
    }
    if (inputNumber <= 2) {
      // a szám páros vagy kisebb kettönél
      return true;
    }
    if (inputNumber % 2 === 0) {
      return false;
    }
    for (let i = 3; i < inputNumber ** 0.5; i += 2) {
      if (inputNumber % i === 0) {
        return false;
      }
    }
    return true;
  }
}
