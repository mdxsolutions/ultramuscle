import { Component, Input } from '@angular/core';

@Component({
  selector: 'workout-header',
  templateUrl: 'workout-header.html'
})
export class WorkoutHeaderComponent {

  @Input() category: string;
  @Input() level: string;
  
  constructor() {}

}
