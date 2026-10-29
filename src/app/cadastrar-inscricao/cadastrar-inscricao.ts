import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InscricaoService, Inscricao } from '../inscricao-service';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-cadastrar-inscricao',
  styleUrl: './cadastrar-inscricao.css',
  templateUrl: './cadastrar-inscricao.html',
})
export class CadastrarInscricao {
  //CRIA VARIAVEIS
  nome: string = '';
  email: string = '';
  oficina: string = '';

  //CRIA OPÇÕES DE OFICINAS
  oficinas: string[] = [
    'Desenvolvimento Web',
    'Inteligência Artificial',
    'Design de Interfaces',
  ];

  //CONTRUCTOR (BASEADO NO METODO SERVICE)
  constructor(private inscricaoService: InscricaoService) {}

  //METODO PARA CADASTRAR (ATRIBUI OS INPUTS AS VARIAVEIS)
  cadastrar(): void {
    if (this.nome && this.email && this.oficina) {
      const novaInscricao: Inscricao = { 
        nome: this.nome,
        email: this.email,
        oficina: this.oficina,
        status: 'Pendente', //ADICIONA O STATUS PENDENTE COMO PADRÃO
      };

      //ADICIONA INSCRIÇÃO NA LISTA DE INSCRICOES
      this.inscricaoService.adicionar(novaInscricao);

      //RESETA AS VARIAVEIS 
      this.nome = ''; 
      this.email = '';
      this.oficina = '';
    }
  }

  //REDUNDANTE (NÃO ESTÁ SENDO USADO)
  adicionar(): void {
    this.cadastrar();
  }
}
