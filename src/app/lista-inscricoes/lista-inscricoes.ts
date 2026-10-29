import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InscricaoService, Inscricao } from '../inscricao-service';

@Component({
  imports: [RouterLink],
  selector: 'app-lista-inscricoes',
  styleUrl: './lista-inscricoes.css',
  templateUrl: './lista-inscricoes.html',
})
export class ListaInscricoes implements OnInit {
  //CRIA ARRAY DE INCRICOES PARA APARECER NO HTML
  inscricoes: Inscricao[] = [];

  //CHAMA METODOS DO SERVICE
  constructor(private inscricaoService: InscricaoService) {}

  //INICIA/CARREGA A LISTA DE INCRICOES
  ngOnInit(): void {
    this.carregarInscricoes();
  }

  //METODO PARA ATUALIZAR INCRICOES
  carregarInscricoes(): void {
    this.inscricoes = this.inscricaoService.listar();
  }

  //METODO PARA MUDAR STATUS DE PENDENTE>CONFIRMADO
  confirmarInscricao(nome: string): void {
    this.inscricaoService.confirmarInscricao(nome);
    this.carregarInscricoes();
  }

  //METODO PARA REMOVER INCRICAO DA LISTA
  removerInscricao(nome: string): void {
    this.inscricaoService.remover(nome);
    this.carregarInscricoes();
  }

  //TRÁS NUMERO TOTAL DE INCRICOES 
  get total(): number {
    return this.inscricoes.length;
  }

  //TRÁS NUMERO TOTAL DE INCRICOES CONFIRMADAS
  get totalConfirmadas(): number {
    return this.inscricoes.filter((i) => i.status === 'Confirmada').length;
  }

  //TRÁS NÚMERO TOTAL DE INCRICOES PENDENTES
  get totalPendentes(): number {
    return this.inscricoes.filter((i) => i.status === 'Pendente').length;
  }
}
