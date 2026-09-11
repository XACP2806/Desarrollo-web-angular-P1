import { Component, input } from '@angular/core';
import type { Contact } from
  '../contact-list/contact-list';

@Component({
  selector: 'tr[app-contact-row]',
  standalone: true,
  template: `
    <td>{{ contact().id }}</td>
    <td>{{ contact().name }}</td>
    <td>{{ contact().email }}</td>
  `
})
export class ContactRowComponent {
  contact = input.required<Contact>();
}
