import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CompanyStructure} from "./company.structure";
import {CompanyService} from "./company.service";
import {isUndefined} from "util";

@Component({
	selector: 'companies-app',
	template: `
<ul>
<li *ngFor="let companyItem of companyItems">
                <a routerLink="/{{this.currentLanguage}}/{{this.currentCat}}/{{companyItem.link}}/">{{companyItem.title}}</a>
            </li>
            </ul>
`
})

/**
 * Companies
 * based on category
 */
export class CompaniesComponent {

	/**
	 * search result
	 * @type {Array}
	 */
	public companyItems: CompanyStructure[] = [];

	/**
	 * current category
	 */
	private currentCat: string;

	/**
	 * current language
	 */
	public currentLanguage: string;

	/**
	 *
	 * @param CompanyService
	 * @param route
	 */
	public constructor(private CompanyService: CompanyService, private route: ActivatedRoute) {
		this.route.params.subscribe(params => {
			if (params['category'] != undefined) {
				// category in url
				this.currentCat = params['category'];
				this.currentLanguage = params['language'];
				this.CompanyService.getCategory(this.currentLanguage,this.currentCat).then((p) => {
					this.companyItems = p;
				});
			}
		});
	}
}
