import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .dark-modal .modal-content {
        background-color: #292b2c;
        color: white;
      }
      .dark-modal .close {
        color: white;
      }
      .light-blue-backdrop {
        background-color: #5cb3fd;
      }
    `
  ]
})
export class AppComponent {
  constructor(private modalService: NgbModal) {}

  title = 'Tolga Dijital';

  openModal(content, photoNumber) {
    console.log(photoNumber);
    this.modalService.open(content, { centered: true, size: 'lg' });
  }
}
