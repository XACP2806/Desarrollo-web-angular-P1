import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactRowComponent } from './contact-row';

describe('ContactRow', () => {
  let component: ContactRowComponent;
  let fixture: ComponentFixture<ContactRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactRowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactRowComponent);
    fixture.componentRef.setInput('contact', {
      id: 1,
      name: 'Contacto de prueba',
      email: 'prueba@example.com',
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
