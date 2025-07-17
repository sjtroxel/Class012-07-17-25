import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../core/services/blog';
import { BlogList } from '../../shared/blogs/blog-list/blog-list';
import { Blog } from '../../shared/models/blog';


@Component({
	selector: 'app-home',
	standalone: true,
	imports: [BlogList],
	templateUrl: './home.html',
	styleUrl: './home.scss',
})
export class Home implements OnInit {
	homeBlogs: Blog[] = [];

	constructor(private blogsService: BlogService) {}

	ngOnInit(): void {
		this.blogsService.getBlogs().subscribe({
			next: (blogs) => {
				console.log(blogs);
			},
			error: (error) => {
				console.error(error);
			},
		});
	}
}
