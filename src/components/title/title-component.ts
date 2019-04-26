import { Component, Input } from '@angular/core';

@Component({
  selector: 'title-component',
  templateUrl: 'title-component.html'
})
export class TitleComponent {

  @Input() title: string;

  constructor() { }

}
