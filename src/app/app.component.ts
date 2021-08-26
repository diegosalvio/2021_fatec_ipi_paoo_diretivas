import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  esconder = false
  textoBotao = 'Esconder'

  cursos = [
    {nomeCurso: 'Português', duracao: '4hs/aula', nomeProfessor: "Jesiane Silva"},
    {nomeCurso: 'Matemática', duracao: '4hs/aula', nomeProfessor: "Elder Barros"},
    {nomeCurso: 'Informática', duracao: '4hs/aula', nomeProfessor: "Gleici Matos"}
  ]

  onCursoAdicionado (curso){
    this.cursos = [curso, ...this.cursos]
  }

  alterarExibicao(){
    this.textoBotao = this.esconder ? "Exibir" : "Esconder"
    this.esconder =!this.esconder
  }

}
