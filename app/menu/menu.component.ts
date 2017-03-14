/**
 * Menu Component
 */
// import system
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

// import components
import {LanguageStructure} from "../language/language.structure";
import {LanguageService} from "../language/language.service";
import {CategoryStructure} from "../category/category.structure";
import {CategoryService} from "../category/category.service";

@Component({
	selector: 'menu-app',
	template: `
<nav class="navbar navbar-default">
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
            <li *ngFor="let langaugeItem of langaugeItems" [ngClass]="{active: currentLang==langaugeItem.link}">
                <a routerLink="/{{langaugeItem.link}}/">{{langaugeItem.title}}</a>
            </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
        <li *ngFor="let categoryItem of categoryItems" [ngClass]="{active: currentCat==categoryItem.link}">
                <a routerLink="/{{currentLang}}/{{categoryItem.link}}/">{{categoryItem.title}}..{{currentCat}}</a>
            </li>
            <li>
            <a routerLink="/{{currentLang}}/search/">Search</a>
            </li>
            <li>
                <a href="https://github.com/kovacszsolt/angular2CompanyDemo">GITHUB Source</a>
            </li>
        </ul>
    </div>
</nav>
`
})

export class MenuComponent {

	// languages
	public langaugeItems: LanguageStructure[] = [];
	// categorys
	public categoryItems: CategoryStructure[] = [];

	// current language
	private currentLang: string;
	// current category
	private currentCat: string;

	/**
	 *
	 * @param serviceLanguage
	 * @param serviceCategory
	 * @param route
	 */
	public constructor(private serviceLanguage: LanguageService, private serviceCategory: CategoryService, private route: ActivatedRoute) {
		// processing routing
		this.route.params.subscribe(params => {
			// get language
			this.currentLang = (params['language'] == undefined ? 'hu' : params['language'] );
			// get category
			this.currentCat = params['category'];
		});
		// read menu items from json
		this.serviceLanguage.getAll().then((p) => {
			this.langaugeItems = p;
		});
		// read category items from json
		this.serviceCategory.getAll().then((p) => {
			this.categoryItems = p;
		});
	}
}
