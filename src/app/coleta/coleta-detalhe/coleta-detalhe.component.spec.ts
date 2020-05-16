import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColetaDetalheComponent } from './coleta-detalhe.component';

describe('ColetaDetalheComponent', () => {
  let component: ColetaDetalheComponent;
  let fixture: ComponentFixture<ColetaDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColetaDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColetaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
