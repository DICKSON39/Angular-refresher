import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data',
  imports: [FormsModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {

   firstName: string = 'Angular';
  angularVersion = 'Version 19';
  yearOfInstall: number = 2026;
  isActive: boolean = false;

  currentDate: Date = new Date();

  inputType: string = 'radio';
  selectedState: string = '';
  style: string = 'red';
  message: string = 'welcome';
  

  showWelcomeAlert() {
    alert('Welcome Home');
  }

  showMessage(message: string) {
    alert(message);
    console.log('second button was pressed', message);
  }

}
