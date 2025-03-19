import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { HellocomponentComponent } from './hellocomponent/hellocomponent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MycomponentComponent, HellocomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_app_angular';
}
