import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  public heroes: string[] = ['Thor', 'Spiderman', 'IronMan', 'Capitan America'];
  public heroeBorrado: string = '';

  borrarHerroe(): void{
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
