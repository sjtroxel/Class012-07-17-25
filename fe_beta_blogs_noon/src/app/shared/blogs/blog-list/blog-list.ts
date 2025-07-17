import { Component, Input } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.scss'
})
export class BlogList {
  @Input({ required: true }) blogs: Blog[] = [];
}
