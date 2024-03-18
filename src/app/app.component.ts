import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  persons: string[] = ['abc','max','sdf'];//property binding to PersonsComponent

  onPersonCreated(name: string){
    this.persons.push(name);

  }
}
