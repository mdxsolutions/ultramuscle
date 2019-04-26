import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

// Models
import { Blog } from '../../models/index.models';


@IonicPage()
@Component({
  selector: 'page-blog-detail',
  templateUrl: 'blog-detail.html',
})
export class BlogDetailPage {

  blog: Blog;

  constructor(
    private navParams: NavParams,
  ) {
    this.blog = this.navParams.get("blog");
  }
}
