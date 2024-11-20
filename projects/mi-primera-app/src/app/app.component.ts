import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiLibComponent } from "mi-lib";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MiLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-primera-app';
}
