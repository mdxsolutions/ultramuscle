import { Component, Input } from '@angular/core';

@Component({
  selector: 'tool-card',
  templateUrl: 'tool-card.html'
})
export class ToolCardComponent {

  @Input() image: string;
  @Input() name: string;

  constructor() {}

}
