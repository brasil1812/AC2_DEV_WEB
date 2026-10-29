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
  //CRIA ARRAY INCRICÕES 
  private inscricoes: Inscricao[] = [];

  //METODO PARA LISTAR AS INCRIÇÕES 
  listar(): Inscricao[] {
    return this.inscricoes;
  }

  //METODO DE ADIÇÃO DE INSCRIÇÃO SOLICITANDO NOME, EMAIL, OFICIA E STATUS
  adicionar(inscricao: { nome: string; email: string; oficina: string; status?: StatusInscricao }): void {
    this.inscricoes.push({
      nome: inscricao.nome,
      email: inscricao.email,
      oficina: inscricao.oficina,
      status: 'Pendente',
    });
  }

  //METODO REMOVER
  remover(nome: string): void {
    this.inscricoes = this.inscricoes.filter((f) => f.nome !== nome);
  }

  //METODO CONFIRMAR INSCRIÇÃO
  confirmarInscricao(nome: string): boolean {
    const inscricao = this.inscricoes.find((f) => f.nome === nome);
    if (inscricao) {
      inscricao.status = 'Confirmada';
      return true;
    }
    return false;
  }

  //METODO CONFIRMAR
  confirmar(nome: string): boolean {
    return this.confirmarInscricao(nome);
  }

  //METODO GET PARA TRAZER A SOMA DE TODAS AS INSCRIÇÕES
  getTotal(): number {
    return this.inscricoes.length;
  }

  //METODO GET PARA TRAZER A SOMA DE TODAS AS INCRIÇÕES CONFIRMADAS
  getTotalConfirmadas(): number {
    return this.inscricoes.filter((i) => i.status === 'Confirmada').length;
  }

  //METODO GET PARA TRAZER A SOMA DE TODAS AS INSCRIÇÕES PENDENTES
  getTotalPendentes(): number {
    return this.inscricoes.filter((i) => i.status === 'Pendente').length;
  }
}


