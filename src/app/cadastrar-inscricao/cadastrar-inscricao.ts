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
  nome: string = '';
  email: string = '';
  oficina: string = '';

  oficinas: string[] = [
    'Desenvolvimento Web',
    'Inteligência Artificial',
    'Design de Interfaces',
  ];

  constructor(private inscricaoService: InscricaoService) {}

  cadastrar(): void {
    if (this.nome && this.email && this.oficina) {
      const novaInscricao: Inscricao = {
        nome: this.nome,
        email: this.email,
        oficina: this.oficina,
        status: 'Pendente',
      };

      this.inscricaoService.adicionar(novaInscricao);

      this.nome = ''; 
      this.email = '';
      this.oficina = '';
    }
  }

  adicionar(): void {
    this.cadastrar();
  }
}



