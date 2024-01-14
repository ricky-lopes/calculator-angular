// @Autoral github.com/ricky-lopes

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calculator';
  firstValue!: number|null
  secondValue!: number|null
  operation!: string|null
  result!: number|null

  ngOnInit() {

  }

  receiveValue(value: number) {
    if(this.firstValue && this.secondValue) {
      alert('Você já possui 2 valores, faça a operação matemática ou apague os valores!');
    } else {
      if(this.firstValue) {
        this.secondValue = value
      } else {
        this.firstValue = value
      }
    }
    
  }

  cleanValues() {
    this.secondValue = null
    this.firstValue = null
    this.operation = null
    this.result = null
  }

  receiveOperator(operator: string) {
    if(!this.operation) {
      this.operation = operator
    } else {
      alert('Você já possui a operação matemática, limpe caso queira mudar, ou execute o código para a resposta!');
    }
  }

  verifyToCalculate() {
    if(!this.result) {
      if(this.firstValue && this.secondValue) {
        if(this.operation) {
          this.calculate()
        } else {
          alert('Selecione a operação matemática!');
        }
      } else {
        alert('Selecione os Valores para calculo!');
      }
    } else {
      alert('Apague o cálculo anterior!');
    }
    
  }

  calculate() {
    switch(this.operation) {
      case '+':
        this.result = this.firstValue! + this.secondValue!
      break
      case '-':
        this.result = this.firstValue! - this.secondValue!
      break
      case '*':
        this.result = this.firstValue! * this.secondValue!
      break
      case '/':
        this.result = this.firstValue! / this.secondValue!
      break
    }
  }
    
}
