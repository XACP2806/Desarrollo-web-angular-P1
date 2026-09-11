import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactListComponent } from './contact-list';

describe('ContactList', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render each contact in its own table row', () => {
    const element = fixture.nativeElement as HTMLElement;
    const rows = element.querySelectorAll<HTMLTableRowElement>('tbody tr');

    expect(rows.length).toBe(2);
    expect(Array.from(rows[0].cells).map((cell) => cell.textContent?.trim()))
      .toEqual(['1', 'María López', 'maria@example.com']);
    expect(Array.from(rows[1].cells).map((cell) => cell.textContent?.trim()))
      .toEqual(['2', 'Carlos Ruiz', 'carlos@example.com']);
  });
});
