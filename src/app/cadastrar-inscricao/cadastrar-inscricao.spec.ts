import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CadastrarInscricao } from './cadastrar-inscricao';

describe('CadastrarInscricao', () => {
  let component: CadastrarInscricao;
  let fixture: ComponentFixture<CadastrarInscricao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarInscricao],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastrarInscricao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

