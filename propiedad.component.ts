import { Component } from '@angular/core';

@Component({
  selector: 'app-propiedad',
  standalone: true,
  imports: [],
  templateUrl: './propiedad.component.html',
  styleUrl: './propiedad.component.css'
})
export class PropiedadComponent {
  color: string = 'blue';

  cambiar_color() {
    this.color = this.color == 'blue' ? 'red': '';
}
}


















/*cambiar_color() {
  this.color = this.color === 'blue' ? 'red' : 'blue';*/
