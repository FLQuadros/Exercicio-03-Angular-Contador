import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contador';

  valorContador: number = 0

  alterarValor(event: any): void {
    this.valorContador = event.target.value

  }

  adicionar(): void {
    this.valorContador += 1

  }

  subtrair(): void {
    this.valorContador += -1
  }
}
