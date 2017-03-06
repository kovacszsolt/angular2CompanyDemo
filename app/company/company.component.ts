/**
 * Company Component
 */

//import system
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

// import components
import {CompanyStructure} from "./company.structure";
import {CategoryStructure} from "../category/category.structure";
import {CompanyService} from "./company.service";
import {isUndefined} from "util";

@Component({
	selector: 'company-app',
	template: `
<div *ngFor="let companyItem of companyItems">
<p>Category: <a routerLink="/{{this.currentLanguage}}/{{this.currentCat}}/">{{companyItem.category.title}}</a><p>
<p>Title: {{companyItem.language[0][currentLanguage].title}}<p>
{{companyItem.language[0][currentLanguage].content}}
</p>
</div>
`
})

export class CompanyComponent {

	// current language for template
	public currentLanguage: string;

	// current category for template
	private currentCat: string;

	// company for template
	public companyItems: CompanyStructure[] = [];

	public constructor(private CompanyService: CompanyService, private route: ActivatedRoute) {
		this.route.params.subscribe(params => {
			this.currentCat = params['category'];
			this.currentLanguage = params['language'];
			// get category from URL
			this.CompanyService.getLink(params['company']).then((p) => {
				this.companyItems = p;
				console.log(p);
			});

		});
	}
}
