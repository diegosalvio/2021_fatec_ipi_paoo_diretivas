import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso-quadro',
  templateUrl: './curso-quadro.component.html',
  styleUrls: ['./curso-quadro.component.css']
})
export class CursoQuadroComponent{

  @Input() curso

}
