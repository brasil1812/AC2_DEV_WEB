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
  inscricoes: Inscricao[] = [];

  constructor(private inscricaoService: InscricaoService) {}

  ngOnInit(): void {
    this.carregarInscricoes();
  }

  carregarInscricoes(): void {
    this.inscricoes = this.inscricaoService.listar();
  }

  confirmarInscricao(nome: string): void {
    this.inscricaoService.confirmarInscricao(nome);
    this.carregarInscricoes();
  }

  removerInscricao(nome: string): void {
    this.inscricaoService.remover(nome);
    this.carregarInscricoes();
  }

  get total(): number {
    return this.inscricoes.length;
  }

  get totalConfirmadas(): number {
    return this.inscricoes.filter((i) => i.status === 'Confirmada').length;
  }

  get totalPendentes(): number {
    return this.inscricoes.filter((i) => i.status === 'Pendente').length;
  }
}


