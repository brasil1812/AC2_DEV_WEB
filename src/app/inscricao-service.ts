import { Injectable } from '@angular/core';

export type StatusInscricao = 'Pendente' | 'Confirmada';

export interface Inscricao {
  nome: string;
  email: string;
  oficina: string;
  status: StatusInscricao;
}

@Injectable({
  providedIn: 'root',
})
export class InscricaoService {
  private inscricoes: Inscricao[] = [];

  listar(): Inscricao[] {
    return this.inscricoes;
  }

  adicionar(inscricao: { nome: string; email: string; oficina: string; status?: StatusInscricao }): void {
    this.inscricoes.push({
      nome: inscricao.nome,
      email: inscricao.email,
      oficina: inscricao.oficina,
      status: 'Pendente',
    });
  }

  remover(nome: string): void {
    this.inscricoes = this.inscricoes.filter((f) => f.nome !== nome);
  }

  confirmarInscricao(nome: string): boolean {
    const inscricao = this.inscricoes.find((f) => f.nome === nome);
    if (inscricao) {
      inscricao.status = 'Confirmada';
      return true;
    }
    return false;
  }

  confirmar(nome: string): boolean {
    return this.confirmarInscricao(nome);
  }

  getTotal(): number {
    return this.inscricoes.length;
  }

  getTotalConfirmadas(): number {
    return this.inscricoes.filter((i) => i.status === 'Confirmada').length;
  }

  getTotalPendentes(): number {
    return this.inscricoes.filter((i) => i.status === 'Pendente').length;
  }
}


