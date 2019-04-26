import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BlogService } from '../../services/index.services';

// Observable / operators
import { Observable } from 'rxjs';

// Models
import { Blog } from '../../models/index.models';

@IonicPage()
@Component({
  selector: 'page-blogs',
  templateUrl: 'blogs.html',
})
export class BlogsPage {

  blogs$: Observable<Blog[]>
  blogs: Blog[] = [];

  constructor(
    private _blogService: BlogService
  ) {
  }

  ionViewDidLoad() {
    this.blogs$ = this._blogService.getAllBlogs("blogId");

    this.blogs$.subscribe(blogs => this.blogs = blogs);
  }

}
