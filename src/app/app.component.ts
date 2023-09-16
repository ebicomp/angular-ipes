import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipes';
  name: string = '';
  date: string = '';
  currency: string = '';
  onInput(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.name = inputValue;
  }

  onInputDate(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.date = inputValue;
  }
  onCurrencyChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.currency = inputValue;
  }
}
