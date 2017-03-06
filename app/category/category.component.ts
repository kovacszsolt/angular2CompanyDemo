/**
 * Category component
 */
// import system
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

// import components
import {CategoryStructure} from "./category.structure";
import {CategoryService} from "./category.service";
import {isUndefined} from "util";

@Component({
	selector: 'category-app',
	template: `
<div>
<span *ngIf="categoryItem!=undefined" >{{categoryItem.title}}</span>

</div>
`
})

export class CategoryComponent {

	// category for templates
	public categoryItem: CategoryStructure;

	// current category
	private currentCat: string;

	public constructor(private CategoryService: CategoryService, private route: ActivatedRoute) {
		this.route.params.subscribe(params => {
			this.currentCat = params['category'];
			this.CategoryService.getLink(this.currentCat).then((p) => {
				this.categoryItem = p[0];
			});
		});
	}
}
