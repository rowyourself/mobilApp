import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Funcionalidad3Page } from './funcionalidad3.page';

describe('Funcionalidad3Page', () => {
  let component: Funcionalidad3Page;
  let fixture: ComponentFixture<Funcionalidad3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Funcionalidad3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
