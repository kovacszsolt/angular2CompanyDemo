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
<p>Title: {{companyItem.title}}<p>
{{companyItem.content}}
</p>
</div>
`
})

export class CompanyComponent {

	/**
	 * current language for template
	 */
	public currentLanguage: string;

	/**
	 * current category for template
	 */
	private currentCat: string;

	/**
	 * current company
	 */
	private currentCompany: string;

	// company for template
	public companyItems: CompanyStructure[] = [];

	public constructor(private CompanyService: CompanyService, private route: ActivatedRoute) {
		this.route.params.subscribe(params => {
			this.currentCat = params['category'];
			this.currentLanguage = params['language'];
			this.currentCompany = params['company'];
			// get category from URL
			this.CompanyService.getLink(this.currentLanguage, this.currentCompany).then((p) => {
				this.companyItems = p;
				console.log(p);
			});

		});
	}
}
