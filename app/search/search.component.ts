/**
 * Search component
 */
// import system
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

// import components
import {CompanyStructure} from "../company/company.structure";
import {CompanyService} from "../company/company.service";
import {isUndefined} from "util";

@Component({
	selector: 'search-app',
	template: `
<div class="form-group">
        <label for="alterEgo">Search</label>
        <input class="form-control" [(ngModel)]="searchText" >
      </div>
      <div>
      <ul>
            <li *ngFor="let searchItem of searchItems" >
                <a routerLink="/{{searchItem.key}}/{{searchItem.category.link}}/{{searchItem.link}}/">{{searchItem.title}} - {{searchItem.category.title}}</a>
                <p>{{searchItem.content}}</p>
            </li>
        </ul>
        </div>
`
})

export class SearchComponent {

	// searchResult for templates
	public searchItems: CompanyStructure[];
	private currentLanguage: string;

	set searchText(text: any) {
		this.SearchService.getSearch(this.currentLanguage,text).then((results) => {
			this.searchItems = results;
		});
	};

	public constructor(private SearchService: CompanyService, private route: ActivatedRoute) {
		this.route.params.subscribe(params => {
			this.currentLanguage=params['language'];
			this.SearchService.getSearch(this.currentLanguage,'').then((results) => {
				this.searchItems = results;
			});
			/*
			this.SearchService.getSearch(this.currentLanguage,'').then((results) => {
				this.searchItems = results;
			});*/
		});
	}
}
