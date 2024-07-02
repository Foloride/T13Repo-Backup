import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {
  bevasarloLista: string[] = [
    "tej",
    "kenyér",
    "szalámi",
    "alma",
    "sör",
    "maci sajt"
  ]
}
