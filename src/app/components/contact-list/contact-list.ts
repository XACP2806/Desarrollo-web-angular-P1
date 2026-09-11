import { Component } from '@angular/core';
import { ContactRowComponent } from
  '../contact-row/contact-row';

export interface Contact {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [ContactRowComponent],
  templateUrl: './contact-list.html'
})
export class ContactListComponent {
  contacts: Contact[] = [
    { id: 1, name: 'María López',
      email: 'maria@example.com' },
    { id: 2, name: 'Carlos Ruiz',
      email: 'carlos@example.com' },
  ];
}
