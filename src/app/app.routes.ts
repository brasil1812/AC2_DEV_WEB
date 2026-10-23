import { Routes } from '@angular/router';
import { CadastrarInscricao } from './cadastrar-inscricao/cadastrar-inscricao';
import { ListaInscricoes } from './lista-inscricoes/lista-inscricoes';

export const routes: Routes = [
    { path: '', component: CadastrarInscricao },
    { path: 'listar-inscricao', component: ListaInscricoes }
];
