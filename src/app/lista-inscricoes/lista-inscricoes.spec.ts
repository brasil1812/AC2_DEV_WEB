import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ListaInscricoes } from './lista-inscricoes';

describe('ListaInscricoes', () => {
  let component: ListaInscricoes;
  let fixture: ComponentFixture<ListaInscricoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaInscricoes],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaInscricoes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

