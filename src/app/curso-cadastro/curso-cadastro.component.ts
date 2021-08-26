import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-curso-cadastro',
  templateUrl: './curso-cadastro.component.html',
  styleUrls: ['./curso-cadastro.component.css']
})
export class CursoCadastroComponent{

  @Output () cursoAdicionado = new EventEmitter()

  adicionar(nomeCurso, duracao, nomeProfessor) {
    this.cursoAdicionado.emit({nomeCurso,duracao,nomeProfessor})
  }
}