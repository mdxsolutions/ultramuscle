import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

// Models
import { Blog } from '../../models/index.models';

@Component({
  selector: 'blog-card',
  templateUrl: 'blog-card.html'
})
export class BlogCardComponent {

  @Input() blog;

  constructor(
    private navCtrl: NavController
  ) {}

  goToBlogPageDetail(blog: Blog) {
    this.navCtrl.push('BlogDetailPage', {blog})
  }

}
